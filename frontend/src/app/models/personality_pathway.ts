import { Personality } from './personality';
import { Pathway } from './pathway';

export class PersonalityPathway {
  id: number;
  personality: Personality;
  pathway: Pathway;
  isMainPathway: boolean;

  constructor(
    id: number,
    personality: Personality,
    pathway: Pathway,
    isMainPathway: boolean
  ) {
    this.id = id;
    this.personality = personality;
    this.pathway = pathway;
    this.isMainPathway = isMainPathway;
  }
}
