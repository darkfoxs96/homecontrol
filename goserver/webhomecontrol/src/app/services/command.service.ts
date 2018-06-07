import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";

import { HttpClient } from "@angular/common/http";
import { ListCommands } from "../models/list-commands.model";

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private httpClient: HttpClient) { }

  getCommands(): Observable<ListCommands[]> {
    return this.httpClient.get<ListCommands[]>('/api/commands');
  }
}
