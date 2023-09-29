import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  
  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    const url = `http://localhost:3000/api/users/${username}`;
    return this.http.get<ApiResponse>(url).pipe(map(response => response.data));
  }
  
}
