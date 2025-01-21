import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsString,
  Length,
  Matches,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { TransformHelper } from '../../../common/helpers/transform.helper';

export class UserUpdateDto {
  @ApiProperty({
    example: 'John Dow',
    description: 'The name of the User',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(TransformHelper.trim)
  @Length(3, 30)
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name can only contain letters and spaces',
  })
  public readonly name: string;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'The avatar of the User',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(TransformHelper.trim)
  public readonly avatar: string;

  @ApiProperty({
    description: 'The age of the User',
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(18, { message: 'User must be older 18 years' })
  public readonly age: number;
}
