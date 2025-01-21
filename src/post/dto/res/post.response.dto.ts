import { ApiProperty } from '@nestjs/swagger';

export class PostResponseDto {
  @ApiProperty({
    example: 'My First Post',
    description: 'Title of the post',
    required: true,
  })
  public readonly title: string;

  @ApiProperty({
    example: 'This is the content of the post...',
    description: 'Content of the post',
    required: true,
  })
  public readonly content: string;

  @ApiProperty({
    description: 'ID of the user who created the post',
    required: true,
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
    example: '2025-01-21T15:00:00.000Z',
    description: 'Date when the post was published',
    required: true,
  })
  public readonly publishedAt: string;
}
