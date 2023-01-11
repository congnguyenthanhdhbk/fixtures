import {
  Body,
  Controller,
  Get,
  HttpStatus,
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

@ApiTags('fixtures management')
@Controller('fixtures')
export class FixturesController {
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
  })
  @ApiBadGatewayResponse({
    description: 'parameters is invalid',
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiInternalServerErrorResponse({
    description: 'Server is happen errors while it is handled resource',
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiParam({ name: 'fixture', required: false })
  async filterByCondition(
    @Query('fromDate') from: string,
    @Query('toDate') to: string,
  ): Promise<any> {
    const [listFixtures, counts] = await this.fixtureService.find({ from, to });
    return listFixtures;
  }
}
