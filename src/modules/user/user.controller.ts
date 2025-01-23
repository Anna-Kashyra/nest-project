import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserUpdateDto } from './dto/req/user.update.dto';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import {
  PublicUserResponseDto,
  ShortUserResponseDto,
} from './dto/res/public.user.response.dto';
import { ApiPaginatedResponse } from '../../common/dto/paginated.response.dto';
import { BaseQueryDto } from '../../common/dto/base.query.dto';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiPaginatedResponse('entities', ShortUserResponseDto)
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get('/list')
  public async findAll(@Query() query: BaseQueryDto) {
    return await this.userService.findAll(query);
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

  @ApiNoContentResponse({ description: 'User deleted successfully' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'User Unauthorized' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
