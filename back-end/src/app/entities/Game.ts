import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, CreateDateColumn } from 'typeorm';

import User from './User';

@Entity({ name: 'game', database: 'universe', engine: 'InnoDB' })
export default class Game {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', nullable: false, default: () => 'CURRENT_TIMESTAMP', unique: true })
  createdAt: Date;
};
