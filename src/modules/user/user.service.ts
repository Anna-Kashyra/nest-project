import { Injectable } from '@nestjs/common';
import { UserUpdateDto } from './dto/req/user.update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/user.entity';
import { Repository } from 'typeorm';
import { PaginatedDto } from '../../common/dto/paginated.response.dto';
// import { paginateRawAndEntities } from 'nestjs-typeorm-paginate';
import { ShortUserResponseDto } from './dto/res/public.user.response.dto';
import { BaseQueryDto } from '../../common/dto/base.query.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findAll(
    query?: BaseQueryDto,
  ): Promise<PaginatedDto<ShortUserResponseDto>> {
    const options = {
      page: +query?.page || 1,
      limit: +query?.limit || 10,
    };

    // Проста пагінація сторінок з юзерами
    // const queryBuilder = this.userRepository.createQueryBuilder('user');
    // queryBuilder
    //   .select('"firstName", "lastName", avatar, city')
    //   .where({ isActive: false });
    //
    // if (query.search) {
    //   queryBuilder.andWhere(`LOWER("firstName") LIKE '%${query.search}%'`);
    // }
    //
    // const [pagination, rawEntities] = await paginateRawAndEntities(
    //   queryBuilder,
    //   options,
    // );
    //
    // return {
    //   page: pagination.meta.currentPage,
    //   pages: pagination.meta.totalPages,
    //   countItems: pagination.meta.totalItems,
    //   entities: rawEntities as [ShortUserResponseDto],
    // };

    // Пагінація юзерів разом із постами
    // const queryBuilder = this.userRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('user.posts', 'post')
    //   .where('"isActive" = false')
    //   .skip((options.page - 1) * options.limit)
    //   .take(options.limit);
    //
    // const count = await queryBuilder.getCount();
    // return {
    //   page: options.page,
    //   pages: Math.ceil(count / options.limit),
    //   countItems: count,
    //   entities: await queryBuilder.getMany(),
    // };

    const [entities, count] = await this.userRepository.findAndCount({
      where: { isActive: false },
      select: {
        firstName: true,
        lastName: true,
        avatar: true,
        city: true,
        id: true,
      },
      relations: {
        posts: true,
      },
      skip: (options.page - 1) * options.limit,
      take: options.limit,
    });

    return {
      page: options.page,
      pages: Math.ceil(count / options.limit),
      countItems: count,
      entities: entities,
    };
  }

  private usersList = [];
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
