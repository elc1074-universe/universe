import { StatusCodes } from 'http-status-codes';

const isSuccessStatusCode = (statusCode: StatusCodes): boolean => {
  return statusCode >= 200 && statusCode <= 299;
};

export default {
  isSuccessStatusCode
};
