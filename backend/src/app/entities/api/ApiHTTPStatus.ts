import { ReasonPhrases, StatusCodes, getReasonPhrase } from 'http-status-codes';

export default class ApiHTTPStatus {

  name: ReasonPhrases | string;

  code: StatusCodes | number;

  constructor(code: StatusCodes | number, name?: ReasonPhrases | string) {
    this.name = name || getReasonPhrase(code);
    this.code = code;
  }
};
