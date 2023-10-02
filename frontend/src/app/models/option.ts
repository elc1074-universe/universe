import { Statement } from './statement';

export class Option {
  id: number;
  description: string;
  value: boolean;
  statement: Statement;

  constructor(
    id: number,
    description: string,
    value: boolean,
    statement: Statement
  ) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.statement = statement;
  }
}
