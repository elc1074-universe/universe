import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statement } from '../models/statement';
import { Personality } from '../models/personality';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface ApiResponse {
  success: boolean;
  httpStatus: {
    name: string;
    code: number;
  };
  data: Statement;
  error: any;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private idSource = new BehaviorSubject<number>(1);
  currentId = this.idSource.asObservable();

  constructor(private http: HttpClient) { }

  getStatement(id: number): Observable<Statement> {
    const url = `http://localhost:3000/api/statements/${id}`;
    return this.http.get<ApiResponse>(url).pipe(map(response => response.data));
  }

  getPersonality(id: number): Observable<Personality> {
    const url = `http://localhost:3000/api/personalities/${id}`;
    return this.http.get<Personality>(url);
  }

  changeId(id: number): void {
    this.idSource.next(id);
  }
} 
