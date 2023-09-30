import { Game } from './game';
import { Statement } from './statement';
import { Option } from './option';

export class GameStatement {
  id: number;
  game: Game;
  statement: Statement;
  selectedOption: Option;

  constructor(
    id: number,
    game: Game,
    statement: Statement,
    selectedOption: Option
  ) {
    this.id = id;
    this.game = game;
    this.statement = statement;
    this.selectedOption = selectedOption;
  }
}
