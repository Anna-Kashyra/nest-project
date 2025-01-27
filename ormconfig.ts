import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import configuration from './src/config/configuration';
import * as path from 'path';
dotenv.config();
import * as process from 'node:process';

const postgresConfig = configuration().database;

export default new DataSource({
  type: 'postgres',
  port: postgresConfig.port,
  host: postgresConfig.host,
  username: postgresConfig.user,
  password: postgresConfig.password,
  database: postgresConfig.dbName,
  entities: [
    path.join(process.cwd(), 'src', 'database', 'entities', '*.entity.ts'),
  ],
  migrations: [
    path.join(process.cwd(), 'src', 'database', 'migrations', '*.ts'),
  ],
  synchronize: false,
});
