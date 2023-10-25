import Option from '../../database/Option';
import StatementRetrievalDTO from './StatementRetrievalDTO';

export default class OptionRetrievalDTO {

  id: number;

  description: string;

  value: number;

  statement: StatementRetrievalDTO;

  constructor(option: Option) {
    this.id = option.id;
    this.description = option.description;
    this.value = option.value;
    this.statement = new StatementRetrievalDTO(option.statement);
  }
};
