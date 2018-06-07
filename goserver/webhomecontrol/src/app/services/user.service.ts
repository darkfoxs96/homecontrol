import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { MessageServer } from "../models/message-server.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(password: string): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/login', {
      password: password
    });
  }

  logout(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/user/logout');
  }

  passwordNew(old_password: string, new_password: string): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/user/password/new', {
      new_password: new_password,
      old_password: old_password
    });
  }

  // passwordRecovery by password_email. Message with a new password to client email address
  passwordRecovery(password_email: string): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/user/password/recovery', {
      password_email: password_email
    });
  }

  // getSMTPServer Array SMTP-servers that support the server 'HomeControl'
  getSMTPServer(): Observable<string[]> {
    return this.httpClient.get<string[]>('/api/user/email/smtpserver');
  }

  settingsEmail(password: string, login_email: string, password_email: string, smtp_server: string): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/user/email', {
      password:       password,
      login_email:    login_email,
      password_email: password_email,
      smtp_server:    smtp_server,
    });
  }
}
