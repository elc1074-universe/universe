import ApiSubError from './ApiSubError';

export default class ApiValidationError extends ApiSubError {

  object: string;

  field?: string;

  rejectedValue?: any;

  constructor(object: string, message: string, field?: string, rejectedValue?: any) {
    super(message);

    this.object = object;
    this.field = field || null;
    this.rejectedValue = rejectedValue || null;
  }
};
