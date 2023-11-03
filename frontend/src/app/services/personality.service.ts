import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Service from './service';
import PersonalityRetrievalDTO from '../models/dto/personality/PersonalityRetrievalDTO';
import StatementRetrievalDTO from '../models/dto/statement/StatementRetrievalDTO';
import ApiResponse from '../models/api/ApiResponse';

@Injectable({ providedIn: 'root' })
export default class PersonalityService extends Service {

  private readonly currentPersonalityId = new BehaviorSubject<number>(1);

  public static readonly NUMBER_OF_PERSONALITIES: number = 6;

  public static readonly NUMBER_OF_STATEMENTS_BY_PERSONALITY: number = 7;

  constructor(httpClient: HttpClient) {
    super(httpClient, 'personalities');
  }

  findAll(): Observable<PersonalityRetrievalDTO[] | null> {
    return this.httpClient
      .get<ApiResponse<PersonalityRetrievalDTO[]>>(`${this.baseURL}`)
      .pipe(map(response => response.data));
  }

  findByLetter(letter: string): Observable<PersonalityRetrievalDTO | null> {
    return this.httpClient
      .get<ApiResponse<PersonalityRetrievalDTO>>(`${this.baseURL}/${letter}`)
      .pipe(map(response => response.data));
  }

  findStatementsByPersonalityLetter(personalityLetter: string): Observable<StatementRetrievalDTO[] | null> {
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
