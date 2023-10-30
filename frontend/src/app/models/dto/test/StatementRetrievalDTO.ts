import OptionRetrievalDTO from './OptionRetrievalDTO';

export default class StatementRetrievalDTO {

  id!: number;

  riasecTitle!: string;

  storyTitle!: string;

  storyText!: string;

  personalityLetter!: string;

  options!: OptionRetrievalDTO[];

  selectedOption!: OptionRetrievalDTO;
};