import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Service from './service';
import StatementRetrievalDTO from '../models/dto/statement/StatementRetrievalDTO';
import ApiResponse from '../models/api/ApiResponse';

@Injectable({ providedIn: 'root' })
export default class PersonalityService extends Service {

  private readonly currentPersonalityId = new BehaviorSubject<number>(1);

  constructor(httpClient: HttpClient) {
    super(httpClient, 'personalities');
  }

  getPersonalityStatementsByPersonalityLetter(personalityLetter: string): Observable<StatementRetrievalDTO[] | null> {
    return this.httpClient
      .get<ApiResponse<StatementRetrievalDTO[]>>(`${this.baseURL}/${personalityLetter}/statements`)
      .pipe(map(response => response.data));
  }

  getCurrentPersonalityId(): Observable<number> {
    return this.currentPersonalityId.asObservable();
  }

  setCurrentPersonalityId(id: number): void {
    this.currentPersonalityId.next(id);
  }
};
