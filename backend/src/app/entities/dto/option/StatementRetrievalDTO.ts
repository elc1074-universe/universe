import Statement from '../../database/Statement';

export default class StatementRetrievalDTO {

  id: number;

  riasecTitle: string;

  storyTitle: string;

  storyText: string;

  personalityLetter: string;

  constructor(statement: Statement) {
    this.id = statement.id;
    this.riasecTitle = statement.riasecTitle;
    this.storyTitle = statement.storyTitle;
    this.storyText = statement.storyText;
    this.personalityLetter = statement.personality ? statement.personality.letter : undefined;
  }
};
