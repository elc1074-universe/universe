import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(to: string, subject: string, text: string): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}/mail/send`, {
      to,
      subject,
      text,
    });
  }
}