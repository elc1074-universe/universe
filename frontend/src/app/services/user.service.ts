import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Service from './service';
import UserRetrievalDTO from '../models/dto/user/UserRetrievalDTO';
import ApiResponse from '../models/api/ApiResponse';

@Injectable({ providedIn: 'root' })
export default class UserService extends Service {

  private currentUser!: UserRetrievalDTO;

  constructor(httpClient: HttpClient) {
    super(httpClient, 'users');
  }

  getUserByCode(code: string): Observable<UserRetrievalDTO | null> {
    return this.httpClient
      .get<ApiResponse<UserRetrievalDTO>>(`${this.baseURL}/${code}`)
      .pipe(map(response => response.data));
  }

  setCurrentUser(user: UserRetrievalDTO): void {
    this.currentUser = user;
  }

  getCurrentUser(): UserRetrievalDTO {
    return this.currentUser;
  }
};
