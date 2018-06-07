import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { MessageServer } from "../models/message-server.model";
import { StatusInterfaceServer } from "../models/status-interface-server.model";

@Injectable({
  providedIn: 'root'
})
export class SoundParsingService {

  constructor(private httpClient: HttpClient) { }

  // getNameUse return: field 'message'
  getNameUse(): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/soundparsing/used');
  }

  setNameUse(sound_parsing_id: string): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/soundparsing/used', sound_parsing_id);
  }

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
  getSettings(sound_parsing_id: string): Observable<string[][]> {
    return this.httpClient.get<string[][]>('/api/soundparsing/settings/' + sound_parsing_id);
  }

  // TODO: settings!
  setSettings(sound_parsing_id: string, settings: any): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/soundparsing/settings/' + sound_parsing_id, settings);
  }

  getSoundParsings(): Observable<StatusInterfaceServer[]> {
    return this.httpClient.get<StatusInterfaceServer[]>('/api/soundparsing');
  }

  // getSoundParsing return: field 'message', 'bool_message'
  getSoundParsing(sound_parsing_id: string): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/soundparsing/' + sound_parsing_id);
  }
}
