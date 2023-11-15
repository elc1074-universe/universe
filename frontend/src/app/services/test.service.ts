import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Service from './service';
import TestCreationDTO from '../models/dto/test/TestCreationDTO';
import TestRetrievalDTO from '../models/dto/test/TestRetrievalDTO';
import TestStatementSavingDTO from '../models/dto/test/TestStatementSavingDTO';
import ResultRetrievalDTO from '../models/dto/test/ResultRetrievalDTO';
import PersonalityRetrievalDTO from '../models/dto/test/PersonalityRetrievalDTO';
import ApiResponse from '../models/api/ApiResponse';

@Injectable({ providedIn: 'root' })
export default class TestService extends Service {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'tests');
  }

  findByUserCode(userCode: string): Observable<TestRetrievalDTO | null> {
    const url = `${this.baseURL}/${userCode}`;

    return this.httpClient
      .get<ApiResponse<TestRetrievalDTO>>(url)
      .pipe(map(response => response.data));
  }

  getResultByUserCode(userCode: string): Observable<ResultRetrievalDTO | null> {
    return this.httpClient
      .get<ApiResponse<ResultRetrievalDTO>>(`${this.baseURL}/${userCode}/result`)
      .pipe(map(response => response.data));
  }

  create(testCreationDTO: TestCreationDTO): Observable<TestRetrievalDTO | null> {
    return this.httpClient
      .post<ApiResponse<TestRetrievalDTO>>(this.baseURL, testCreationDTO)
      .pipe(map(response => response.data));
  }

  saveStatement(userCode: string, testStatementSavingDTO: TestStatementSavingDTO): Observable<TestRetrievalDTO | null> {
    return this.httpClient
      .patch<ApiResponse<TestRetrievalDTO>>(
        `${this.baseURL}/${userCode}/statements`, testStatementSavingDTO
      )
      .pipe(map(response => response.data));
  }

  findPersonalities(userCode: string): Observable<PersonalityRetrievalDTO[] | null> {
    return this.httpClient
      .get<ApiResponse<PersonalityRetrievalDTO[]>>(`${this.baseURL}/${userCode}/personalities`)
      .pipe(map(response => response.data));
  }

  findPersonality(userCode: string, personalityLetter: string): Observable<TestRetrievalDTO | null> {
    return this.httpClient
      .get<ApiResponse<TestRetrievalDTO>>(`${this.baseURL}/${userCode}/personalities/${personalityLetter}`)
      .pipe(map(response => response.data));
  }

  deletePersonality(userCode: string, personalityLetter: string): Observable<void | null> {
    return this.httpClient.delete<ApiResponse<void>>(`${this.baseURL}/${userCode}/personalities/${personalityLetter}`)
    .pipe(map(response => response && response.data));
  }
  
  
};
