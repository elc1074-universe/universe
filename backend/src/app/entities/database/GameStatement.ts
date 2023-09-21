import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique, OneToOne } from 'typeorm';

import Game from './Game';
import Statement from './Statement';
import Option from './Option';

@Entity({ name: 'game_statement', database: 'universe', engine: 'InnoDB' })
@Unique(['game', 'statement'])
export default class GameStatement {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @ManyToOne(() => Game)
  @JoinColumn({ name: 'game_id', referencedColumnName: 'id' })
  game: Game;

  @ManyToOne(() => Statement)
  @JoinColumn({ name: 'statement_id', referencedColumnName: 'id' })
  statement: Statement;

  @OneToOne(() => Option)
  @JoinColumn({ name: 'selected_option_id', referencedColumnName: 'id' })
  selectedOption: Option;
};
