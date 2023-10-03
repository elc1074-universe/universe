import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Statement } from '../models/statement';
import { Personality } from '../models/personality';
import { Option } from '../models/option';
interface ApiResponseStatement {
  success: boolean;
  httpStatus: {
    name: string;
    code: number;
  };
  data: Statement;
  error: any;
  timestamp: string;
}

interface ApiResponseOption {
  success: boolean;
  httpStatus: {
    name: string;
    code: number;
  };
  data: Option[];
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
    return this.http.get<ApiResponseStatement>(url).pipe(
      map(response => {
        if (!response.data) {
          throw new Error('Registro não encontrado');
        }
        return response.data;
      })
    );
  }

  getOption(id: number): Observable<Option[]> {
    const url = `http://localhost:3000/api/options/statement/${id}`;
    return this.http.get<ApiResponseOption>(url).pipe(map(response => response.data));
  }
  
  changeId(id: number): void {
    this.idSource.next(id);
  }
} 
