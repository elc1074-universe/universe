export class Personality {
    id: number;
    letter: string;
    name: string;
    description: string;
    storyTitle: string;
    storyDescription: string;
  
    constructor(
      id: number,
      letter: string,
      name: string,
      description: string,
      storyTitle: string,
      storyDescription: string
    ) {
      this.id = id;
      this.letter = letter;
      this.name = name;
      this.description = description;
      this.storyTitle = storyTitle;
      this.storyDescription = storyDescription;
    }
  }