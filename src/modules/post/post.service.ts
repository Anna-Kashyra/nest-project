import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { BasePostRequestDto } from './dto/req/base.post.request.dto';
import { PostUpdateDto } from './dto/req/post.update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../../database/entities/post.entity';
import { Repository } from 'typeorm';
import { BasePostResponseDto } from './dto/res/base.post.response.dto';

@Injectable()
export class PostService {
  private logger: Logger;
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  public async create(dto: BasePostRequestDto): Promise<BasePostResponseDto> {
    try {
      return await this.postRepository.save(
        this.postRepository.create({
          ...dto,
          authorId: '571bf8b3-1ca2-4269-a417-3b4f3baa3003',
        }),
      );
    } catch (err) {
      this.logger.error(err);
      throw new BadRequestException('Creat post failed.');
    }
  }

  private postsList = [];
  public async findAll() {
    return this.postsList;
  }

  public async findOne(id: number) {
    return await this.postsList.find((post) => post.id == id);
  }

  public async update(id: number, dto: PostUpdateDto) {
    const postIndex = this.postsList.findIndex((post) => post.id === id);
    const updatedPost = {
      ...this.postsList[postIndex],
      ...dto,
    };
    this.postsList[postIndex] = updatedPost;

    return await updatedPost;
  }

  public async remove(id: number) {
    const postIndex = this.postsList.findIndex((post) => post.id === id);
    return await this.postsList.splice(postIndex, 1)[0];
  }
}
