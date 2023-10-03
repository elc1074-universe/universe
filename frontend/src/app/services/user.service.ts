import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';

interface ApiResponse {
  success: boolean;

  httpStatus: {
    name: string;
    code: number;
  };

  data: User;

  error: any;
  
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser!: User;

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    const url = `${environment.apiBaseURL}/users/${username}`;
    return this.http.get<ApiResponse>(url).pipe(map(response => response.data));
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  createUser(user: User): Observable<User> {
    const url = `${environment.apiBaseURL}/users`;
    return this.http.post<ApiResponse>(url, user).pipe(map(response => response.data));
  }
}
