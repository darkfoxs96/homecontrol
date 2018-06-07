import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { MessageServer } from "../models/message-server.model";

@Injectable({
  providedIn: 'root'
})
export class UseControlService {

  constructor(private httpClient: HttpClient) { }

  // getReportUnauthorizedUse return: field 'bool_message'
  getReportUnauthorizedUse(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/usecontrol/reportunauthorizeduse');
  }

  setReportUnauthorizedUse(report_unauthorized_use: boolean): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/usecontrol/reportunauthorizeduse', '' + report_unauthorized_use);
  }

  // getDetectedTime return: field 'int_message' format second
  getDetectedTime(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/usecontrol/detectedtime');
  }

  // setDetectedTime format second
  setDetectedTime(detected_time: number): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/usecontrol/detectedtime', '' + detected_time);
  }

  // getLog return: field 'message'
  getLog(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/usecontrol/log');
  }

  // getLastTime return: field 'int_message' format second
  getLastTime(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/usecontrol/lasttime');
  }
}
