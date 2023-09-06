import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';

import Personality from './Personality';

@Entity({ name: 'statement', database: 'universe', engine: 'InnoDB' })
export default class Statement {

  @Column({ name: 'id', type: 'int', primary: true, nullable: false, unique: true })
  id: number;

  @Column({ name: 'text', type: 'varchar', length: 255, nullable: false, unique: true })
  text: string;

  @OneToOne(() => Personality)
  @JoinColumn({ name: 'personality_id', referencedColumnName: 'id' })
  personality: Personality;
};
