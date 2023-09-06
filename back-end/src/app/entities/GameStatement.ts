import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique, Column } from 'typeorm';

import Game from './Game';
import Statement from './Statement';

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

  @Column({ name: 'is_statement_checked', type: 'bit', nullable: false, default: 0, unique: false })
  isMainPathway: boolean;
};
