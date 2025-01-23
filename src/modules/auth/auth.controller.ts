import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { SignUpRequestDto, SignUpResponseDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    description: 'User successfully created',
    type: SignUpResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Post('/register')
  public async signUp(
    @Body() dto: SignUpRequestDto,
  ): Promise<SignUpResponseDto> {
    return await this.authService.signUp(dto);
  }
}
