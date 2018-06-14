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
    let list_controlled:     Controlled[]    = [];
    let list_commands:       ListCommands[]  = [];
    let list_command_record: CommandRecord[] = [];

    Promise.all([
      this.commandRecord.getCommandRecords().forEach(
        (data) => {
          list_command_record = data;
        }
      ),
      this.controlled.getControlleds().forEach(
        (data) => {
          list_controlled = data;
        }
      ),
      this.commandService.getCommands().forEach(
        (data) => {
          list_commands = data;
        }
      ),
    ]).then(() => {
      this.store.dispatch<IAppReducerState>({
        type:                RELOAD_ARRAY,
        list_controlled:     list_controlled,
        list_commands:       list_commands,
        list_command_record: list_command_record,
      });
    });
  }

  getStore() {
    return {
      listener_store: this.store.select<IAppReducerState>('appReducer'),
      load_array: (): void => {
        this.store.dispatch<IAppReducerState>({
          type:                GO_RELOAD_ARRAY,
          list_controlled:     [],
          list_commands:       [],
          list_command_record: [],
        });
      }
    }
  }
}
