import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';

import PersonalityPathway from './PersonalityPathway';
import UFSMCourse from './UFSMCourse';

@Entity({ name: 'personality_pathway_ufsm_course', database: 'universe', engine: 'InnoDB' })
@Unique(['personalityPathway', 'ufsmCourse'])
export default class PersonalityPathwayUFSMCourse {

  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int' })
  id: number;

  @ManyToOne(() => PersonalityPathway)
  @JoinColumn({ name: 'personality_pathway_id', referencedColumnName: 'id' })
  personalityPathway: PersonalityPathway;

  @ManyToOne(() => UFSMCourse)
  @JoinColumn({ name: 'ufsm_course_id', referencedColumnName: 'id' })
  ufsmCourse: UFSMCourse;
};
