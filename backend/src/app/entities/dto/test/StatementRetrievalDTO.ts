import TestStatement from '../../database/TestStatement';
import OptionRetrievalDTO from './OptionRetrievalDTO';
import OptionService from '../../../services/OptionService';

export default class StatementRetrievalDTO {

  id: number;

  riasecTitle: string;

  storyTitle: string;

  storyText: string;

  personalityLetter: string;

  options: OptionRetrievalDTO[];

  selectedOption: OptionRetrievalDTO;

  private constructor(testStatement: TestStatement, options: OptionRetrievalDTO[]) {
    this.id = testStatement.statement.id;
    this.riasecTitle = testStatement.statement.riasecTitle;
    this.storyTitle = testStatement.statement.storyTitle;
    this.storyText = testStatement.statement.storyText;
    this.personalityLetter = testStatement.statement.personality ? testStatement.statement.personality.letter : undefined;
    this.options = options;
    this.selectedOption = new OptionRetrievalDTO(testStatement.selectedOption);
  }

  static async create(testStatement: TestStatement): Promise<StatementRetrievalDTO> {
    const options = await OptionService.findByStatementId(testStatement.statement.id);
    const mappedOptions = options.map(option => new OptionRetrievalDTO(option));

    return new StatementRetrievalDTO(testStatement, mappedOptions);
  }
};
