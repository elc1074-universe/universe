import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'result', database: 'universe', engine: 'InnoDB' })
export default class Result {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'user_code', type: 'char', length: 3, nullable: false, unique: true })
  userCode: string;

  @Column({ name: 'r_score', type: 'int', nullable: false, default: 0, unique: false })
  rScore: number;

  @Column({ name: 'i_score', type: 'int', nullable: false, default: 0, unique: false })
  iScore: number;

  @Column({ name: 'a_score', type: 'int', nullable: false, default: 0, unique: false })
  aScore: number;

  @Column({ name: 's_score', type: 'int', nullable: false, default: 0, unique: false })
  sScore: number;

  @Column({ name: 'e_score', type: 'int', nullable: false, default: 0, unique: false })
  eScore: number;

  @Column({ name: 'c_score', type: 'int', nullable: false, default: 0, unique: false })
  cScore: number;

  @Column({ name: 'interest_code', type: 'char', length: 3, nullable: false, unique: false })
  interestCode: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', nullable: false, unique: true })
  createdAt: Date;
};
