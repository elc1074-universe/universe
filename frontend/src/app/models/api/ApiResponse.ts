import ApiHTTPStatus from './ApiHTTPStatus';

export default class ApiResponse<T> {

  success!: boolean;

  httpStatus!: ApiHTTPStatus;

  data!: T | null;

  error!: T | null;

  timestamp!: string;
};
