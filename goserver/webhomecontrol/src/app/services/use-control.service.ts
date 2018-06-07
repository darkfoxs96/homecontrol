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

  setReportUnauthorizedUse(reportUnauthorizedUse: boolean): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/usecontrol/reportunauthorizeduse', '' + reportUnauthorizedUse);
  }

  // getDetectedTime return: field 'int_message' format second
  getDetectedTime(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/usecontrol/detectedtime');
  }

  // setDetectedTime format second
  setDetectedTime(detectedTime: number): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/usecontrol/detectedtime', '' + detectedTime);
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
