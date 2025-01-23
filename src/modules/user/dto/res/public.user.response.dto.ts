import { PickType } from '@nestjs/swagger';
import { BaseUserResponseDto } from './base.user.response.dto';

export class PublicUserResponseDto extends PickType(BaseUserResponseDto, [
  'firstName',
  'lastName',
  'age',
  'avatar',
  'city',
  'bio',
]) {}

export class ShortUserResponseDto extends PickType(BaseUserResponseDto, [
  'firstName',
  'lastName',
  'avatar',
  'city',
]) {}
