import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { TransformHelper } from '../../../common/helpers/transform.helper';

export class UserCreateDto {
  @ApiProperty({
    example: 'John Dow',
    description: 'The name of the User',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Transform(TransformHelper.trim)
  @Length(3, 30)
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name can only contain letters and spaces',
  })
  public readonly name: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'The email of the User',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @Matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: 'Invalid email',
  })
  public readonly email: string;

  @ApiProperty({
    example: '123password$',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Transform(TransformHelper.trim)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, {
    message:
      'Password must contain at least one letter, one number, and one special character (@$!%*?&)',
  })
  public readonly password: string;

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
