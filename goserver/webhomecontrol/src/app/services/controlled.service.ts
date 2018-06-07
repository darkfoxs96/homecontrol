import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { Controlled } from "../models/controlled.model";
import { MessageServer } from "../models/message-server.model";

@Injectable({
  providedIn: 'root'
})
export class ControlledService {

  constructor(private httpClient: HttpClient) { }

  getControlled(id: number): Observable<Controlled> {
    return this.httpClient.get<Controlled>('/api/controlled/' + id);
  }

  getControlleds(): Observable<Controlled[]> {
    return this.httpClient.get<Controlled[]>('/api/controlled');
  }

  // addControlled return: new id `Controlled`. string parse to number
  addControlled(controlled: Controlled): Observable<string> {
    return this.httpClient.post<string>('/api/controlled', {
      common_buffer:   controlled.common_buffer,
      home_control_id: controlled.home_control_id,
      host:            controlled.host,
      name:            controlled.name,
      port:            controlled.port
    })
  }

  updateControlled(controlled: Controlled): Observable<MessageServer> {
    return this.httpClient.put<MessageServer>('/api/controlled/' + controlled.id, {
      common_buffer:   controlled.common_buffer,
      home_control_id: controlled.home_control_id,
      host:            controlled.host,
      name:            controlled.name,
      port:            controlled.port
    })
  }

  deleteControlled(id: number): Observable<MessageServer> {
    return this.httpClient.delete<MessageServer>('/api/controlled/' + id);
  }

  getControlledsInfo(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/controlled/info');
  }
}
