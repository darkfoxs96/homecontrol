import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { MessageServer } from "../models/message-server.model";
import { StatusInterfaceServer } from "../models/status-interface-server.model";

@Injectable({
  providedIn: 'root'
})
export class BotMessengerService {

  constructor(private httpClient: HttpClient) { }

  // getSettings:
  /*
      Example:
  ["namefield","typefild","value"],
  ["key","string",""],
  ["uuid","string","fdgdgme-sdfsw-asdsa"],
  ["parse","bool","false"], //will return from the client "parse": false
  ["id","int","1990"], //will return from the client "id": 1990
  ["fieldListName","list","value","en","sp","ru"],
  ["lang","list","ru","en","sp","ru"], //will return from the client "lang": "ru" //first field to up
  ["create key google","url","https://google.com"]

      Options:
  https://github.com/darkfoxs96/homecontrol#to-all-interfaces
  */
  getSettings(bot_messenger_id: string): Observable<string[][]> {
    return this.httpClient.get<string[][]>('/api/botmessenger/settings/' + bot_messenger_id);
  }

  // TODO: settings!
  setSettings(bot_messenger_id: string, settings: any): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/botmessenger/settings/' + bot_messenger_id, settings);
  }

  getStatusBotMessengers(): Observable<StatusInterfaceServer[]> {
    return this.httpClient.get<StatusInterfaceServer[]>('/api/botmessenger');
  }

  // getBotMessenger return: field 'message', 'bool_message'
  getStatusBotMessenger(bot_messenger_id: string): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/botmessenger/' + bot_messenger_id);
  }

}
