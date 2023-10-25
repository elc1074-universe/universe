import StatementRetrievalDTO from './StatementRetrievalDTO';

export default class OptionRetrievalDTO {

  id!: number;

  description!: string;

  value!: number;

  statement!: StatementRetrievalDTO;
};
