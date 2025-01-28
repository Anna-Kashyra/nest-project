import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Config, DatabaseConfig } from '../config/configs.type';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService<Config>) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const postgresConfig = this.configService.get<DatabaseConfig>('database');
    return {
      type: 'postgres',
      port: postgresConfig.port,
      host: postgresConfig.host,
      username: postgresConfig.user,
      password: postgresConfig.password,
      database: postgresConfig.dbName,
      entities: [User, Post],
      synchronize: true,
    };
  }
}
