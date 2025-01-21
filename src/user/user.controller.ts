import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/req/user.create.dto';
import { UserUpdateDto } from './dto/req/user.update.dto';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { PublicUserResponseDto } from './dto/res/public.user.response.dto';
import { PrivateUserResponseDto } from './dto/res/private.user.response.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({
    description: 'User successfully created',
    type: PrivateUserResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Post()
  public async create(
    @Body() dto: UserCreateDto,
  ): Promise<PrivateUserResponseDto> {
    return await this.userService.create(dto);
  }

  @ApiOkResponse({
    description: 'List of users retrieved successfully',
    type: [PublicUserResponseDto],
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get()
  public async findAll(): Promise<PublicUserResponseDto[]> {
    return await this.userService.findAll();
  }

  @ApiOkResponse({
    description: 'User retrieved successfully',
    type: PublicUserResponseDto,
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get(':id')
  public async findOne(
    @Param('id') id: string,
  ): Promise<PublicUserResponseDto> {
    return await this.userService.findOne(+id);
  }

  @ApiOkResponse({
    description: 'User updated successfully',
    type: PublicUserResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'User Unauthorized' })
  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UserUpdateDto,
  ): Promise<PublicUserResponseDto> {
    return await this.userService.update(+id, dto);
  }

  @ApiOkResponse({ description: 'User deleted successfully' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
