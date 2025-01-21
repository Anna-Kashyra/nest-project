import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDto } from './dto/req/post.create.dto';
import { PostUpdateDto } from './dto/req/post.update.dto';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostResponseDto } from './dto/res/post.response.dto';

@ApiTags('Posts')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiCreatedResponse({
    description: 'Post successfully created',
    type: PostResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Post()
  public async create(@Body() dto: PostCreateDto): Promise<PostResponseDto> {
    return await this.postService.create(dto);
  }

  @ApiOkResponse({
    description: 'List of posts retrieved successfully',
    type: [PostResponseDto],
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get()
  public async findAll(): Promise<PostResponseDto[]> {
    return await this.postService.findAll();
  }

  @ApiOkResponse({
    description: 'User retrieved successfully',
    type: PostResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Post not found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<PostResponseDto> {
    return await this.postService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PostUpdateDto,
  ): Promise<PostResponseDto> {
    return await this.postService.update(+id, dto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.postService.remove(+id);
  }
}
