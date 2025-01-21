import { ApiProperty } from '@nestjs/swagger';

export class BaseUserResponseDto {
  @ApiProperty({
    example: '478607fv507ie970',
    description: 'The id of the User',
  })
  id: string;

  @ApiProperty({
    example: 'John Dow',
    description: 'The name of the User',
  })
  public readonly name: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'The email of the User',
  })
  public readonly email: string;

  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'The avatar of the User',
    required: false,
  })
  public readonly avatar: string;

  @ApiProperty({
    description: 'The age of the User',
    required: false,
  })
  public readonly age: number;
}
