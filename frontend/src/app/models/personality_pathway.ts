import { Personality } from './personality';
import { Pathway } from './pathway';

export class PersonalityPathway {
  id!: number;
  personality!: Personality;
  pathway!: Pathway;
  isMainPathway!: boolean;
}
