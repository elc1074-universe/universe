import ApiSubError from './ApiSubError';

export default class ApiValidationError extends ApiSubError {

  object!: string;

  field!: string | null;

  rejectedValue!: any;
};
