import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(to: string, subject: string, text: string): Observable<any> {
    return this.http.post("http://localhost:3000/api/mail/send", {
      to,
      subject,
      text,
    });
  }
}
