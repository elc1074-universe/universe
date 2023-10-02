// StatementRetrievalDTO.js
import Statement from '../database/Statement';

export default class StatementRetrievalDTO {

  id: number;
  riasecTitle: string;
  storyTitle: string;
  storyText: string;
  personalityId: number;

  constructor(statement: Statement) {
    this.id = statement.id;
    this.riasecTitle = statement.riasecTitle;
    this.storyTitle = statement.storyTitle;
    this.storyText = statement.storyText;
    this.personalityId = statement.personality ? statement.personality.id : undefined;
}
};
