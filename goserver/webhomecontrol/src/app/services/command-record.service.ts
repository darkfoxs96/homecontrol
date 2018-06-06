import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { CommandRecord } from "../models/command-record.model";
import { MessageServer } from "../models/message-server.model";

@Injectable({
  providedIn: 'root'
})
export class CommandRecordService {

  constructor(private httpClient: HttpClient) { }

  getCommandRecords(): Observable<CommandRecord[]> {
    return this.httpClient.get<CommandRecord[]>('/api/command/record');
  }

  // id == command record
  getCommandRecord(id: string): Observable<CommandRecord> {
    return this.httpClient.get<CommandRecord>('/api/command/record/' + id);
  }

  addCommandRecord(command_record: CommandRecord): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/command/record/' + command_record.id, {
      type_record:     command_record.type_record,
      command:         command_record.command,
      string_command:  command_record.string_command,
      number_of_words: command_record.number_of_words,
      controlled_id:   command_record.controlled_id
    })
  }

  // id == command record
  deleteCommandRecord(id: string): Observable<MessageServer> {
    return this.httpClient.delete<MessageServer>('/api/command/record/' + id);
  }

  useText(command: string): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/command/used/text', command);
  }

  // TODO: settings !
  useSound(sound: number[], stringCommand: string): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/command/used/sound', sound);
  }
}
