import { ApiProperty } from '@nestjs/swagger';
import { Fixtures } from '../models/fixtures.model';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class MetadataDto {
  @ApiProperty()
  page: number;
  @ApiProperty()
  limit: number;
  @ApiProperty()
  totalRecords: number;
  @ApiProperty()
  totalPage: number;
}

export class HttpDto {
  @ApiProperty()
  code: number;
  @ApiProperty()
  message: string;
  @ApiModelProperty({
    description: 'Array of fixtures.',
    isArray: true,
    type: Fixtures,
  })
  data?: Fixtures[];
  @ApiModelProperty({
    type: MetadataDto,
  })
  metadata?: any;
}

export class HttpExceptionDto {
  @ApiProperty()
  code: number;
  @ApiProperty()
  message: string;
}
