import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { MessageServer } from "../models/message-server.model";
import { StatusInterfaceServer } from "../models/status-interface-server.model";
import { ListCommands } from "../models/list-commands.model";

@Injectable({
  providedIn: 'root'
})
// TPHomeControlService third party home control system
export class TPHomeControlService {

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
  getSettings(t_p_home_control_id: string): Observable<string[][]> {
    return this.httpClient.get<string[][]>('/api/tphomecontrol/settings/' + t_p_home_control_id);
  }

  // TODO: settings!
  setSettings(t_p_home_control_id: string, settings: any): Observable<MessageServer> {
    return this.httpClient.post<MessageServer>('/api/tphomecontrol/settings/' + t_p_home_control_id, settings);
  }

  // getObjects return: [["objectID", "info object"], ["objectID", "info object"], ["", ""]...]
  getObjects(t_p_home_control_id: string): Observable<string[][]> {
    return this.httpClient.get<string[][]>('/api/tphomecontrol/objects/' + t_p_home_control_id);
  }

  getStatusTPHomeControls(): Observable<StatusInterfaceServer[]> {
    return this.httpClient.get<StatusInterfaceServer[]>('/api/tphomecontrol');
  }

  // getStatusTPHomeControl return: field 'message', 'bool_message'
  getStatusTPHomeControl(t_p_home_control_id: string): Observable<MessageServer> {
    return this.httpClient.get<MessageServer>('/api/tphomecontrol/' + t_p_home_control_id);
  }

  getCommands(t_p_home_control_id: string): Observable<ListCommands>  {
    return this.httpClient.get<ListCommands>('/api/tphomecontrol/commands/' + t_p_home_control_id);
  }

  getInfoTPHomeControls(): Observable<string> {
    return this.httpClient.get<string>('/api/tphomecontrol/info');
  }

  // getInfoTPHomeControlString return: all info...
  getInfoTPHomeControlString(t_p_home_control_id: string): Observable<string> {
    return this.httpClient.get<string>('/api/tphomecontrol/info/' + t_p_home_control_id + '?type=string');
  }

  // getInfoTPHomeControlStrings return: ["info", "info", "info", "info"...]
  getInfoTPHomeControlStrings(t_p_home_control_id: string): Observable<string[]> {
    return this.httpClient.get<string[]>('/api/tphomecontrol/info/' + t_p_home_control_id + '?type=json');
  }
}
