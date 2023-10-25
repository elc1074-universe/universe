import Option from '../../database/Option';

export default class StatementOptionRetrievalDTO {

  id: number;

  description: string;

  value: number;

  constructor(option: Option) {
    this.id = option.id + 2 - option.statement.id * 2;
    this.description = option.description;
    this.value = option.value;
  }
};
