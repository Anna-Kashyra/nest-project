import { BaseCustomEntity } from './base.custom.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export enum PostCategory {
  TECHNOLOGY = 'Technology',
  LIFESTYLE = 'Lifestyle',
  HEALTH = 'Health',
  FINANCE = 'Finance',
  ENTERTAINMENT = 'Entertainment',
}

export class Post extends BaseCustomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: false })
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Column('integer', { nullable: false })
  authorId: number;

  @Column({
    type: 'enum',
    enum: PostCategory,
    nullable: true,
  })
  category: PostCategory;

  @Column('jsonb', { nullable: true })
  tags: string[];

  @Column('integer', { nullable: true, default: 0 })
  likes: number;

  @Column('integer', { nullable: true, default: 0 })
  views: number;

  @Column('integer', { nullable: true, default: 0 })
  commentsCount: number;
}
