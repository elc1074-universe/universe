import Personality from '../database/Personality';

export default class PersonalityRetrievalDTO {

  id: number;

  letter: string;

  name: string;

  description: string;

  storyTitle: string;

  storyDescription: string;

  constructor(personality: Personality) {
    this.id = personality.id;
    this.letter = personality.letter;
    this.name = personality.name;
    this.description = personality.description;
    this.storyTitle = personality.storyTitle;
    this.storyDescription = personality.storyDescription;
  }
};
