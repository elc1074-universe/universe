import { StatusCodes } from 'http-status-codes';

import ApiSubError from './ApiSubError';
import ApiHTTPStatus from './ApiHTTPStatus';

export default class ApiError extends Error {

  httpStatus: ApiHTTPStatus;

  message: string;

  debugMessage?: string;

  subErrors?: ApiSubError[];

  timestamp: string;

  constructor(httpStatusCode: StatusCodes, message: string, debugMessage?: string, subErrors?: ApiSubError[]) {
    super();

    this.httpStatus = new ApiHTTPStatus(httpStatusCode);
    this.message = message;
    this.debugMessage = debugMessage || null;
    this.subErrors = subErrors || null;
    this.timestamp = new Date().toLocaleString('pt-BR');

    Object.setPrototypeOf(this, ApiError.prototype);
  }
};
