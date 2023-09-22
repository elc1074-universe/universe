import { StatusCodes } from 'http-status-codes';

import ApiError from './ApiError';
import ApiHTTPStatus from './ApiHTTPStatus';
import HttpStatusUtils from '../../utils/HttpStatusUtils';

export default class ApiResponse<T> {

  success: boolean;

  httpStatus: ApiHTTPStatus;

  data?: T;

  error?: ApiError;

  timestamp: string;

  constructor(httpStatusCode: StatusCodes, data?: T, error?: ApiError) {
    this.success = HttpStatusUtils.isSuccessStatusCode(httpStatusCode);
    this.httpStatus = new ApiHTTPStatus(httpStatusCode);
    this.data = data || null;
    this.error = error || null;
    this.timestamp = new Date().toLocaleString('pt-BR');
  }
};
