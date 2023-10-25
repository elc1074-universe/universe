import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique, OneToOne } from 'typeorm';

import Test from './Test';
import Statement from './Statement';
import Option from './Option';

@Entity({ name: 'test_statement', database: 'universe', engine: 'InnoDB' })
@Unique(['test', 'statement'])
export default class TestStatement {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @ManyToOne(() => Test, { eager: true })
  @JoinColumn({ name: 'test_id', referencedColumnName: 'id' })
  test: Test;

  @ManyToOne(() => Statement, { eager: true })
  @JoinColumn({ name: 'statement_id', referencedColumnName: 'id' })
  statement: Statement;

  @OneToOne(() => Option, { eager: true })
  @JoinColumn({ name: 'selected_option_id', referencedColumnName: 'id' })
  selectedOption: Option;

  constructor(test: Test, statement: Statement, selectedOption: Option) {
    this.test = test;
    this.statement = statement;
    this.selectedOption = selectedOption;
  }
};
