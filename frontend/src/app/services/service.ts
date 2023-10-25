import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export default abstract class Service {

  protected readonly baseURL: string;

  constructor(protected httpClient: HttpClient, resource: string) {
    this.baseURL = `${environment.apiBaseURL}/${resource}`;
  }
};
