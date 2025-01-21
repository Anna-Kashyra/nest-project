import { Injectable } from '@nestjs/common';
import { PostCreateDto } from './dto/req/post.create.dto';
import { PostUpdateDto } from './dto/req/post.update.dto';

@Injectable()
export class PostService {
  private postsList = [];
  public async create(dto: PostCreateDto) {
    const index = new Date().valueOf();
    this.postsList.push({
      ...dto,
      id: index,
    });
    return await this.postsList[this.postsList.length - 1];
  }

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
