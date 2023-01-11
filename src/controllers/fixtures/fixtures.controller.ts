import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { FixturesService } from '../../services/fixtures/fixtures.service';
import {
  ApiBadGatewayResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { FixtureDto, FixtureResponseDto } from '../../dtos/fixture.dto';
import { Fixtures } from '../../models/fixtures.model';
import { HttpDto, HttpExceptionDto } from '../../dtos/http.dto';

@ApiTags('fixtures management')
@Controller('fixtures')
export class FixturesController {
  private readonly logger = new Logger(FixturesController.name);

  constructor(private readonly fixtureService: FixturesService) {}
  // I assumed that this API to support for seeding data. It is not belong to scope of assignment to reviewß
  @Post()
  async createFixtures(@Body() body: any): Promise<any> {
    return this.fixtureService.createFixture(body);
  }

  @Get()
  @ApiOkResponse({
    description:
      'list fixture filtered by month. Default, It will be showed current month fixtures',
    status: HttpStatus.OK,
    type: HttpDto,
  })
  @ApiBadGatewayResponse({
    description: 'parameters is invalid',
    status: HttpStatus.BAD_REQUEST,
    type: HttpExceptionDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Server is happen errors while it is handled resource',
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: HttpExceptionDto,
  })
  async filterByCondition(
    @Query('fromDate') from: string,
    @Query('toDate') to: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<any> {
    if (!from) {
      return <HttpDto>{
        code: HttpStatus.BAD_REQUEST,
        message: 'from date is required',
      };
    }

    if (!to) {
      return <HttpDto>{
        code: HttpStatus.BAD_REQUEST,
        message: 'from date is required',
      };
    }

    try {
      const [listFixtures, counts] = await this.fixtureService.find({
        from,
        to,
        page: page - 1,
        limit,
      });
      return <HttpDto>{
        code: HttpStatus.OK,
        message: 'success',
        data: listFixtures,
        metadata: {
          page,
          limit,
          totalRecords: counts,
          totalPage: Math.floor(counts / limit),
        },
      };
    } catch (e) {
      this.logger.error(`[filterByCondition] - err: ${JSON.stringify(e)}`);
      return <HttpDto>{
        code: HttpStatus.BAD_REQUEST,
        message: 'from date is required',
      };
    }
  }
}
