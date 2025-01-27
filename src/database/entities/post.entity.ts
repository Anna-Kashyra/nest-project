import { BaseCustomEntity } from './base.custom.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

// export enum PostCategory {
//   TECHNOLOGY = 'Technology',
//   LIFESTYLE = 'Lifestyle',
//   HEALTH = 'Health',
//   FINANCE = 'Finance',
//   ENTERTAINMENT = 'Entertainment',
// }

@Entity()
export class Post extends BaseCustomEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Column()
  authorId: string;

  // @Column({
  //   type: 'enum',
  //   enum: PostCategory,
  //   nullable: true,
  // })
  // category: PostCategory;

  @Column('jsonb', { nullable: true })
  tags: string[];

  @Column('integer', { nullable: true, default: 0 })
  likes: number;

  @Column('integer', { nullable: true, default: 0 })
  views: number;

  @Column('integer', { nullable: true, default: 0 })
  commentsCount: number;

  @ManyToOne(() => User, (entity) => entity.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'authorId' })
  user?: User;
}
