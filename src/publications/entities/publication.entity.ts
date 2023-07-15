import { User } from '../../users';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

@Entity({ name: 'publication' })
export class Publication extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryId: string;

  @Column()
  locationId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isReady: boolean;

  @Column()
  mode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  modifiedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => User, (user) => user.publications)
  user: User;
}
