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
import { BasePostRequestDto } from './dto/req/base.post.request.dto';
import { PostUpdateDto } from './dto/req/post.update.dto';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BasePostResponseDto } from './dto/res/base.post.response.dto';

@ApiTags('Posts')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiCreatedResponse({
    description: 'Post successfully created',
    type: BasePostResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Post()
  public async create(
    @Body() dto: BasePostRequestDto,
  ): Promise<BasePostResponseDto> {
    return await this.postService.create(dto);
  }

  @ApiOkResponse({
    description: 'List of posts retrieved successfully',
    type: [BasePostResponseDto],
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get()
  public async findAll(): Promise<BasePostResponseDto[]> {
    return await this.postService.findAll();
  }

  @ApiOkResponse({
    description: 'User retrieved successfully',
    type: BasePostResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Post not found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<BasePostResponseDto> {
    return await this.postService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PostUpdateDto,
  ): Promise<BasePostResponseDto> {
    return await this.postService.update(+id, dto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.postService.remove(+id);
  }
}
