import ApiSubError from './ApiSubError';

export default class ApiError {

  status: number;

  message: string;

  debugMessage?: string;

  subErrors?: ApiSubError[];

  timestamp: string;

  constructor(status: number, message: string, debugMessage?: string, subErrors?: ApiSubError[]) {
    this.status = status;
    this.message = message;
    this.debugMessage = debugMessage || null;
    this.subErrors = subErrors || null;
    this.timestamp = new Date().toLocaleString('pt-BR');
  }
};
