import Personality from '../../database/Personality';
import TestService from '../../../services/TestService';
import PersonalityService from '../../../services/PersonalityService';

export default class PersonalityRetrievalDTO {

  id: number;

  letter: string;

  name: string;

  description: string;

  storyTitle: string;

  storyDescription: string;

  isCompleted: boolean;

  lastCompletedStatementId: number;

  private constructor(personality: Personality, isCompleted: boolean, currentStatementId: number) {
    this.id = personality.id;
    this.letter = personality.letter;
    this.name = personality.name;
    this.description = personality.description;
    this.storyTitle = personality.storyTitle;
    this.storyDescription = personality.storyDescription;
    this.isCompleted = isCompleted;
    this.lastCompletedStatementId = (currentStatementId - 1) % PersonalityService.NUMBER_OF_STATEMENTS_BY_PERSONALITY + 1;
  }

  static async create(personality: Personality, userCode: string): Promise<PersonalityRetrievalDTO> {
    const isCompleted = await TestService.isPersonalityCompleted(userCode, personality.id);
    const currentStatementId = await TestService.findPersonalityLastCompletedStatementId(userCode, personality.id);

    return new PersonalityRetrievalDTO(personality, isCompleted, currentStatementId);
  }
};
