import Option from '../database/Option';

export default class OptionRetrievalDTO {

  id: number;

  description: string;

  value: boolean;

  statementId: number;

  constructor(option: Option) {
    this.id = option.id;
    this.description = option.description;
    this.value = option.value;
    this.statementId = option.statement ? option.statement.id : undefined;
  }
};
