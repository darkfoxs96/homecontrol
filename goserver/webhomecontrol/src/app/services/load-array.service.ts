import { Injectable } from '@angular/core';

import { Store } from "@ngrx/store";
import { IAppReducerState } from "../store/reducers/appReducer";
import { GO_RELOAD_ARRAY, RELOAD_ARRAY } from "../store/actions/appActions";

import { CommandService } from "./command.service";
import { ControlledService } from "./controlled.service";
import { CommandRecordService } from "./command-record.service";
import { CommandRecord } from "../models/command-record.model";
import { Controlled } from "../models/controlled.model";
import { ListCommands } from "../models/list-commands.model";

@Injectable({
  providedIn: 'root'
})
export class LoadArrayService {
  private status_http = {
    list_controlled:     false,
    list_commands:       false,
    list_command_record: false,
  };

  private list_controlled:     Controlled[];
  private list_commands:       ListCommands[];
  private list_command_record: CommandRecord[];

  constructor(private store:          Store<IAppReducerState>,
              private commandService: CommandService,
              private controlled:     ControlledService,
              private commandRecord:  CommandRecordService,
  ) {
    this.store.select<IAppReducerState>('appReducer').subscribe(
    (data) => {
        if(data.type == GO_RELOAD_ARRAY) {
          this.loadArray();
        }
      }
    );
  }

  private loadArray(): void {
    this.commandService.getCommands().subscribe(
      (data) => {
        this.list_commands = data;
        this.status_http.list_commands = true;
        this.appendStore();
      },
      (err) => {
        alert(err.error)
      }
    );

    this.controlled.getControlleds().subscribe(
      (data) => {
        this.list_controlled = data;
        this.status_http.list_controlled = true;
        this.appendStore();
      },
      (err) => {
        alert(err.error)
      }
    );

    this.commandRecord.getCommandRecords().subscribe(
      (data) => {
        this.list_command_record = data;
        this.status_http.list_command_record = true;
        this.appendStore();
      },
      (err) => {
        alert(err.error)
      }
    );
  }

  private appendStore(): void {
    if(this.status_http.list_commands       == false ||
       this.status_http.list_controlled     == false ||
       this.status_http.list_command_record == false) {
      return;
    }

    this.store.dispatch({
      type:                RELOAD_ARRAY,
      list_controlled:     this.list_controlled,
      list_commands:       this.list_commands,
      list_command_record: this.list_command_record,
    });

    this.status_http.list_commands       = false;
    this.status_http.list_controlled     = false;
    this.status_http.list_command_record = false;
  }

  getStore() {
    return {
      listener_store: this.store.select<IAppReducerState>('appReducer'),
      load_array: () => {
        this.store.dispatch({
          type:                GO_RELOAD_ARRAY,
          list_controlled:     [],
          list_commands:       [],
          list_command_record: [],
        });
      }
    }
  }
}
