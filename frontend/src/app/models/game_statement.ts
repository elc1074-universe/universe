import { Game } from './game';
import { Statement } from './statement';
import { Option } from './option';

export class GameStatement {
  id!: number;
  game!: Game;
  statement!: Statement;
  selectedOption!: Option;
}
