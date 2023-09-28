import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';

import Personality from './Personality';

@Entity({ name: 'statement', database: 'universe', engine: 'InnoDB' })
export default class Statement {

  @Column({ name: 'id', type: 'int', primary: true, nullable: false, unique: true })
  id: number;

  @Column({ name: 'riasec_title', type: 'varchar', length: 63, nullable: false, unique: true })
  riasecTitle: string;

  @Column({ name: 'story_title', type: 'varchar', length: 63, nullable: false, unique: false })
  storyTitle: string;

  @Column({ name: 'story_text', type: 'varchar', length: 511, nullable: false, unique: false })
  storyText: string;

  @OneToOne(() => Personality)
  @JoinColumn({ name: 'personality_id', referencedColumnName: 'id' })
  personality: Personality;
};
