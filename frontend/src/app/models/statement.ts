import { Personality } from './personality';
export class Statement {
  id!: number;
  riasecTitle!: string;
  storyTitle!: string;
  storyText!: string;
  personality!: Personality;
} 