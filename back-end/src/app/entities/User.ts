import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import IUser from '../interfaces/IUser';

@Entity({ name: 'user', database: 'universe', engine: 'InnoDB' })
export default class User implements IUser {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'code', type: 'char', length: 3, nullable: false, unique: true })
  code: string;

  @Column({ name: 'username', type: 'varchar', length: 31, nullable: false, unique: false })
  username: string;

  @Column({ name: 'email', type: 'varchar', length: 255, nullable: true, unique: false })
  email: string;
};
