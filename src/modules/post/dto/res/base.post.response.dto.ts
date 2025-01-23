import { ApiProperty } from '@nestjs/swagger';

export class BasePostResponseDto {
  @ApiProperty({
    example: '478607fv507ie970',
    description: 'The id of the Post',
  })
  public readonly id: string;

  @ApiProperty({
    example: 'My First Post',
    description: 'Title of the post',
  })
  public readonly title: string;

  @ApiProperty({
    example: 'This is the content of the post...',
    description: 'Content of the post',
  })
  public readonly content: string;

  @ApiProperty({
    description: 'ID of the user who created the post',
  })
  public readonly authorId: number;

  @ApiProperty({
    example: 'Technology',
    description: 'Category of the post',
    required: false,
  })
  public readonly category: string;

  @ApiProperty({
    example: ['nestjs', 'typescript'],
    description: 'Tags associated with the post',
    required: false,
  })
  public readonly tags: string[];

  @ApiProperty({
    example: 0,
    description: 'Number of likes for the post',
    required: false,
  })
  public readonly likes: number;

  @ApiProperty({
    example: 0,
    description: 'Number of views for the post',
    required: false,
  })
  public readonly views: number;

  @ApiProperty({
    example: 0,
    description: 'Number of comments for the post',
    required: false,
  })
  public readonly commentsCount: number;

  @ApiProperty({
    example: '2025-01-21T15:00:00.000Z',
    description: 'Date when the post was published',
    required: false,
  })
  public readonly createdAt: string;

  @ApiProperty({
    example: '2025-01-21T15:00:00.000Z',
    description: 'Date when the post was published',
    required: false,
  })
  public readonly updatedAt: string;
}
