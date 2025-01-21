import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { TransformHelper } from '../../../common/helpers/transform.helper';

export class PostUpdateDto {
  @ApiProperty({
    example: 'Updated Post Title',
    description: 'Title of the post',
    required: false,
  })
  @IsString()
  @Transform(TransformHelper.trim)
  @MinLength(5, { message: 'Title must be at least 5 characters long' })
  @MaxLength(80, { message: 'Title can be at most 80 characters long' })
  public readonly title: string;

  @ApiProperty({
    example: 'This is the updated content of the post...',
    description: 'Content of the post',
    required: false,
  })
  @IsString()
  @Transform(TransformHelper.trim)
  @MinLength(1, { message: 'Content must be at least 20 characters long' })
  @MaxLength(600, { message: 'Content can be at most 600 characters long' })
  public readonly content: string;
}
