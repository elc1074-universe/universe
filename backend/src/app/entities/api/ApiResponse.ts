import ApiError from './ApiError';

export default class ApiResponse<T> {

  status: number;

  data?: T;

  error?: ApiError;

  timestamp: string;

  constructor(status: number, data?: T, error?: ApiError) {
    this.status = status;
    this.data = data || null;
    this.error = error || null;
    this.timestamp = new Date().toLocaleString('pt-BR');
  }
};
