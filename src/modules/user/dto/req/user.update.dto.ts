import { PartialType, PickType } from '@nestjs/swagger';
// import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
// import {
//   IsInt,
//   IsNotEmpty,
//   IsOptional,
//   IsString,
//   Length,
//   Matches,
//   Min,
// } from 'class-validator';
// import { Transform, Type } from 'class-transformer';
// import { TransformHelper } from '../../../../common/helpers/transform.helper';
// import { BaseUserResponseDto } from '../res/base.user.response.dto';
import { BaseUserRequestDto } from './base.user.request.dto';

// export class UserUpdateDto {
//   @ApiProperty({
//     example: 'John',
//     description: 'The name of the User',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   @Transform(TransformHelper.trim)
//   @Length(3, 30)
//   @Matches(/^[a-zA-Z\s]+$/, {
//     message: 'Name can only contain letters and spaces',
//   })
//   public readonly firstName: string;
//
//   @ApiProperty({
//     example: 'Dow',
//     description: 'The last name of the User',
//     required: false,
//   })
//   @IsNotEmpty()
//   @IsString()
//   @Transform(TransformHelper.trim)
//   @Length(3, 30)
//   @Matches(/^[a-zA-Z\s]+$/, {
//     message: 'Name can only contain letters and spaces',
//   })
//   public readonly lastName: string;
//
//   @ApiProperty({
//     example: 'https://example.com/image.png',
//     description: 'The avatar of the User',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   @Transform(TransformHelper.trim)
//   public readonly avatar: string;
//
//   @ApiProperty({
//     description: 'The age of the User',
//     required: false,
//   })
//   @IsOptional()
//   @Type(() => Number)
//   @IsInt()
//   @Min(18, { message: 'User must be older 18 years' })
//   public readonly age: number;
//
//   @ApiProperty({
//     example: 'Poltava',
//     description: 'User city',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   @Transform(TransformHelper.trim)
//   public readonly city: string;
//
//   @ApiProperty({
//     description: 'About User',
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   @Length(0, 600)
//   public readonly bio: string;
// }

export class UserUpdateDto extends PartialType(
  PickType(BaseUserRequestDto, [
    'firstName',
    'lastName',
    'age',
    'avatar',
    'city',
    'bio',
  ] as const),
) {}
