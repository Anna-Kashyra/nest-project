import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseCustomEntity } from './base.custom.entity';
import { Post } from './post.entity';

@Entity()
export class User extends BaseCustomEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  firstName: string;

  @Column('text', { nullable: false })
  lastName: string;

  @Column('text', { nullable: false, unique: true })
  email: string;

  @Column('text', { nullable: false })
  password: string;

  @Column('text', { nullable: true })
  avatar: string;

  @Column('integer', { nullable: true })
  age: number;

  @Column('text', { nullable: true })
  city: string;

  @Column({ nullable: true, default: null })
  phone: string;

  @Column('text', { nullable: true })
  bio: string;

  @Column({ default: false })
  isActive: boolean;

  @OneToMany(() => Post, (entity) => entity.user)
  posts?: Post[];
}
