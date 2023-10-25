import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, CreateDateColumn } from 'typeorm';

import User from './User';

@Entity({ name: 'test', database: 'universe', engine: 'InnoDB' })
export default class Test {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', nullable: false, unique: true })
  createdAt: Date;
};
