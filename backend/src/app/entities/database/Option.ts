import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';

import Statement from './Statement';

@Entity({ name: 'option', database: 'universe', engine: 'InnoDB' })
export default class Option {

  @Column({ name: 'id', type: 'int', primary: true, nullable: false, unique: true })
  id: number;

  @Column({ name: 'text', type: 'varchar', length: 255, nullable: false, unique: true })
  text: string;

  @Column({ name: 'value', type: 'bit', nullable: false, unique: false })
  value: boolean;

  @OneToOne(() => Statement)
  @JoinColumn({ name: 'statement_id', referencedColumnName: 'id' })
  statement: Statement;
};
