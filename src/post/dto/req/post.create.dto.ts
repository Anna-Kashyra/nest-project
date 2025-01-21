import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { TransformHelper } from '../../../common/helpers/transform.helper';

export class PostCreateDto {
  @ApiProperty({
    example: 'My First Post',
    description: 'Title of the post',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform(TransformHelper.trim)
  @MinLength(5, { message: 'Title must be at least 5 characters long' })
  @MaxLength(80, { message: 'Title can be at most 80 characters long' })
  public readonly title: string;

  @ApiProperty({
    example: 'This is the content of the post...',
    description: 'Content of the post',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform(TransformHelper.trim)
  @MinLength(1, { message: 'Content must be at least 20 characters long' })
  @MaxLength(600, { message: 'Content can be at most 600 characters long' })
  public readonly content: string;

  @ApiProperty({
    description: 'ID of the user who created the post',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  public readonly authorId: number;

  @ApiProperty({
    example: 'Technology',
    description: 'Category of the post',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsIn(['Technology', 'Lifestyle', 'Health', 'Finance', 'Entertainment'], {
    message:
      'Category must be one of the following: Technology, Lifestyle, Health, Finance, Entertainment',
  })
  public readonly category: string;

  @ApiProperty({
    example: ['nestjs', 'typescript'],
    description: 'Tags associated with the post',
    required: false,
  })
  @IsOptional()
  @IsArray()
  public readonly tags: string[];

  @ApiProperty({
    example: '2025-01-21T15:00:00.000Z',
    description: 'Date when the post was published',
    required: true,
  })
  @IsDateString()
  public readonly publishedAt: string;
}
