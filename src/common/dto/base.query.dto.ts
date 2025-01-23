import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

export class BaseQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumberString()
  public sort: string;

  @ApiProperty({ required: false, default: 'ASC', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  public order = 'ASC';

  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  public page = 1;

  @ApiProperty({ required: false, default: 10 })
  @IsOptional()
  public limit = 10;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  public search: string;
}
