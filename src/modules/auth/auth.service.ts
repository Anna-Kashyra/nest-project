import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpRequestDto, SignUpResponseDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  public async signUp(dto: SignUpRequestDto): Promise<SignUpResponseDto> {
    const findUser: User | null = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (findUser) {
      throw new BadRequestException('User with this email already exist.');
    }
    const password = await bcrypt.hash(dto.password, 10);
    const userData: Partial<User> = { ...dto, password };
    const user: User = await this.userRepository.save(
      this.userRepository.create(userData),
    );
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      city: user.city,
      createdAt: user.createdAt,
    };
  }
}
