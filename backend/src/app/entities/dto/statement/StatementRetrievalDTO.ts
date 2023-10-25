import Statement from '../../database/Statement';
import OptionRetrievalDTO from './OptionRetrievalDTO';
import OptionService from '../../../services/OptionService';

export default class StatementRetrievalDTO {

  id: number;

  riasecTitle: string;

  storyTitle: string;

  storyText: string;

  personalityLetter: string;

  options: OptionRetrievalDTO[];

  private constructor(statement: Statement, options: OptionRetrievalDTO[]) {
    this.id = statement.id;
    this.riasecTitle = statement.riasecTitle;
    this.storyTitle = statement.storyTitle;
    this.storyText = statement.storyText;
    this.personalityLetter = statement.personality ? statement.personality.letter : undefined;
    this.options = options;
  }

  static async create(statement: Statement): Promise<StatementRetrievalDTO> {
    const options = await OptionService.findOptionsByStatementId(statement.id);
    const mappedOptions = options.map(option => new OptionRetrievalDTO(option));

    return new StatementRetrievalDTO(statement, mappedOptions);
  }
};
