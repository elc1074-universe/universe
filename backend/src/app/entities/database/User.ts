import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

import UserSavingDTO from '../dto/UserSavingDTO';
import UserRetrievalDTO from '../dto/UserRetrievalDTO';

@Entity({ name: 'user', database: 'universe', engine: 'InnoDB' })
export default class User implements UserSavingDTO, UserRetrievalDTO {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'code', type: 'char', length: 3, nullable: false, unique: true })
  code: string;

  @Column({ name: 'username', type: 'varchar', length: 31, nullable: false, unique: false })
  username: string;

  @Column({ name: 'email', type: 'varchar', length: 255, nullable: true, unique: false })
  email: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', nullable: false, unique: true })
  createdAt: Date;
};
