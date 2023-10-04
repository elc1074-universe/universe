import { Statement } from './statement';
export class Option {
  id!: number;
  description!: string;
  value!: boolean;
  statement!: Statement;
}
