import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statement } from '../models/statement';
import { Personality } from '../models/personality';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getStatement(id: number): Observable<Statement> {
    const url = `http://localhost:3000/api/statements/${id}`;
    return this.http.get<Statement>(url);
  }

  getPersonality(id: number): Observable<Personality> {
    const url = `http://localhost:3000/api/personalities/${id}`;
    return this.http.get<Personality>(url);
    
  }
} 
