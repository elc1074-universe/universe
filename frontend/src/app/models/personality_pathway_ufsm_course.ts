import { PersonalityPathway } from './personality_pathway';
import { UFSMCourse } from './ufsm_course';

export class PersonalityPathwayUFSMCourse {
  id: number;
  personalityPathway: PersonalityPathway;
  ufsmCourse: UFSMCourse;

  constructor(
    id: number,
    personalityPathway: PersonalityPathway,
    ufsmCourse: UFSMCourse
  ) {
    this.id = id;
    this.personalityPathway = personalityPathway;
    this.ufsmCourse = ufsmCourse;
  }
}