import Personality from '../database/Personality';

export default class PersonalityRetrievalDTO {

  id: number;
  letter: string;
  name: string;
  description: string;
  story_title: string;
  story_description: string;

  constructor(personality: Personality) {
    this.id = personality.id;
    this.letter = personality.letter;
    this.name = personality.name;
    this.description = personality.description;
    this.story_title = personality.storyTitle;
    this.story_description = personality.storyDescription;
  }
};
