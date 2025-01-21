import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/req/user.create.dto';
import { UserUpdateDto } from './dto/req/user.update.dto';

@Injectable()
export class UserService {
  private usersList = [];
  public async create(dto: UserCreateDto) {
    const index = new Date().valueOf();
    this.usersList.push({
      ...dto,
      id: index,
    });
    return await this.usersList[this.usersList.length - 1];
  }

  public async findAll() {
    return this.usersList;
  }

  public async findOne(id: number) {
    return await this.usersList.find((user) => user.id == id);
  }

  public async update(id: number, dto: UserUpdateDto) {
    const userIndex = this.usersList.findIndex((user) => user.id === id);
    const updatedUser = {
      ...this.usersList[userIndex],
      ...dto,
    };
    this.usersList[userIndex] = updatedUser;

    return await updatedUser;
  }

  public async remove(id: number) {
    const userIndex = this.usersList.findIndex((user) => user.id === id);
    return await this.usersList.splice(userIndex, 1)[0];
  }
}
