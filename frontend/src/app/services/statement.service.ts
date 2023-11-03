import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Service from './service';
import StatementRetrievalDTO from '../models/dto/statement/StatementRetrievalDTO';
import ApiResponse from '../models/api/ApiResponse';

@Injectable({ providedIn: 'root' })
export default class StatementService extends Service {

  private readonly currentStatementId = new BehaviorSubject<number>(1);

  public static readonly NUMBER_OF_STATEMENTS: number = 42;

  constructor(httpClient: HttpClient) {
    super(httpClient, 'statements');
  }

  findAll(): Observable<StatementRetrievalDTO[] | null> {
    return this.httpClient
      .get<ApiResponse<StatementRetrievalDTO[]>>(`${this.baseURL}`)
      .pipe(map(response => response.data));
  }

  findById(id: number): Observable<StatementRetrievalDTO | null> {
    return this.httpClient
      .get<ApiResponse<StatementRetrievalDTO>>(`${this.baseURL}/${id}`)
      .pipe(map(response => response.data));
  }

  getCurrentStatementId(): Observable<number> {
    return this.currentStatementId.asObservable();
  }

  setCurrentStatementId(id: number): void {
    this.currentStatementId.next(id);
  }
};
