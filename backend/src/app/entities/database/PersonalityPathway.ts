import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, Unique } from 'typeorm';

import Personality from './Personality';
import Pathway from './Pathway';

@Entity({ name: 'personality_pathway', database: 'universe', engine: 'InnoDB' })
@Unique(['personality', 'pathway'])
export default class PersonalityPathway {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @ManyToOne(() => Personality, { eager: true })
  @JoinColumn({ name: 'personality_id', referencedColumnName: 'id' })
  personality: Personality;

  @ManyToOne(() => Pathway, { eager: true })
  @JoinColumn({ name: 'pathway_id', referencedColumnName: 'id' })
  pathway: Pathway;

  @Column({ name: 'is_main_pathway', type: 'tinyint', nullable: false, unique: false })
  isMainPathway: boolean;
};
