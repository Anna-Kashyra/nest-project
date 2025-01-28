import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import configuration from './src/config/configuration';
import * as path from 'path';
dotenv.config();
import * as process from 'node:process';
import { User } from './src/database/entities/user.entity';
import { Post } from './src/database/entities/post.entity';

const postgresConfig = configuration().database;

export default new DataSource({
  type: 'postgres',
  port: postgresConfig.port,
  host: postgresConfig.host,
  username: postgresConfig.user,
  password: postgresConfig.password,
  database: postgresConfig.dbName,
  entities: [User, Post],
  migrations: [
    path.join(process.cwd(), 'src', 'database', 'migrations', '*.ts'),
  ],
  synchronize: false,
});
