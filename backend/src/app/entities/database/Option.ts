import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Statement from './Statement';

@Entity({ name: 'option', database: 'universe', engine: 'InnoDB' })
export default class Option {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'description', type: 'varchar', length: 511, nullable: false, unique: true })
  description: string;

  @Column({ name: 'value', type: 'bit', nullable: false, unique: false })
  value: boolean;

  @ManyToOne(() => Statement)
  @JoinColumn({ name: 'statement_id', referencedColumnName: 'id' })
  statement: Statement;
};
