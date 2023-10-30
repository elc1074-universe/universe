import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Service from './service';
import UserRetrievalDTO from '../models/dto/user/UserRetrievalDTO';
import ApiResponse from '../models/api/ApiResponse';

@Injectable({ providedIn: 'root' })
export default class UserService extends Service {

  private currentUserCode: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(httpClient: HttpClient) {
    super(httpClient, 'users');
  }

  getUserByCode(code: string): Observable<UserRetrievalDTO | null> {
    return this.httpClient
      .get<ApiResponse<UserRetrievalDTO>>(`${this.baseURL}/${code}`)
      .pipe(map(response => response.data));
  }

  getCurrentUserCode(): Observable<string | null> {
    return this.currentUserCode.asObservable();
  }

  setCurrentUserCode(code: string): void {
    this.currentUserCode.next(code);
  }
};
