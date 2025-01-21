import { PickType } from '@nestjs/swagger';
import { BaseUserResponseDto } from './base.user.response.dto';

export class PrivateUserResponseDto extends PickType(BaseUserResponseDto, [
  'id',
  'name',
  'age',
  'avatar',
  'email',
]) {}
