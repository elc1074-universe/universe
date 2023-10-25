import ApiHTTPStatus from './ApiHTTPStatus';
import ApiSubError from './ApiSubError';

export default class ApiError extends Error {

  httpStatus!: ApiHTTPStatus;

  override message!: string;

  debugMessage!: string | null;

  subErrors!: ApiSubError[] | null;

  timestamp!: string;
};
