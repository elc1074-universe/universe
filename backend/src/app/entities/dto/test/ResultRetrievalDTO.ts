import Result from '../../database/Result';

export default class ResultRetrievalDTO {

  rScore: number;

  iScore: number;

  aScore: number;

  sScore: number;

  eScore: number;

  cScore: number;

  interestCode: string;

  createdAt: string;

  constructor(result: Result) {
    this.rScore = result.rScore;
    this.iScore = result.iScore;
    this.aScore = result.aScore;
    this.sScore = result.sScore;
    this.eScore = result.eScore;
    this.cScore = result.cScore;
    this.interestCode = result.interestCode;
    this.createdAt = result.createdAt.toLocaleString('pt-BR');
  }
};
