import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseCustomEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
