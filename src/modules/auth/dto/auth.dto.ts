import { PickType } from '@nestjs/swagger';
import { BaseUserRequestDto } from '../../user/dto/req/base.user.request.dto';
import { BaseUserResponseDto } from '../../user/dto/res/base.user.response.dto';

export class SignUpRequestDto extends PickType(BaseUserRequestDto, [
  'firstName',
  'lastName',
  'email',
  'password',
  'age',
  'city',
]) {}

export class SignUpResponseDto extends PickType(BaseUserResponseDto, [
  'id',
  'firstName',
  'lastName',
  'email',
  'age',
  'city',
  'createdAt',
]) {}
