import { Personality } from './personality';

export class Statement {
  id: number;
  riasecTitle: string;
  storyTitle: string;
  storyText: string;
  personality: Personality;

  constructor(
    id: number,
    riasecTitle: string,
    storyTitle: string,
    storyText: string,
    personality: Personality
  ) {
    this.id = id;
    this.riasecTitle = riasecTitle;
    this.storyTitle = storyTitle;
    this.storyText = storyText;
    this.personality = personality;
  }
}