import { Component, OnInit } from '@angular/core';

import { LangService } from "../../services/lang.service";
import { CommandRecordService } from "../../services/command-record.service";
import { ControlledService } from "../../services/controlled.service";
import { CommandService } from "../../services/command.service";
import { Controlled } from "../../models/controlled.model";
import { CommandRecord } from "../../models/command-record.model";
import { ListCommands } from "../../models/list-commands.model";

interface IRecord {
  id:             string,
  command:        string,
  string_command: string,
  controlled:     string,
  is_controlled:  boolean;
}

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {
  public  table_sm = false;

  public  map_command_record: {[key: string]: CommandRecord} = {['']: new CommandRecord()};
  public  listRecord: IRecord[] = [];
  private is_ready: number[] = [];

  private list_commands: ListCommands[] = [];
  private list_controlled: Controlled[] = [];
  private list_command_record: CommandRecord[] = [];

  constructor(
    public  t: LangService,
    private commandRecord: CommandRecordService,
    private controlled: ControlledService,
    private commandService: CommandService,
  ) { }

  ngOnInit() {
    this.commandService.getCommands().subscribe(
      (data) => {
        this.list_commands = data;
        this.createListRecord();
      },
      (err) => {
        alert(err.error)
      }
    );

    this.controlled.getControlleds().subscribe(
      (data) => {
        this.list_controlled = data;
        this.createListRecord();
      },
      (err) => {
        alert(err.error)
      }
    );

    this.commandRecord.getCommandRecords().subscribe(
      (data) => {
        this.list_command_record = data;
        this.createListRecord();
      },
      (err) => {
        alert(err.error)
      }
    );
  }

  // createListRecord
  private createListRecord() {
    if (this.is_ready.length != 2) {
      this.is_ready.push(0);
      return;
    }

    this.list_command_record.forEach((command_record) => {
      this.map_command_record[command_record.id] = command_record;
    });

    this.list_command_record.forEach((command_record) => {
      let command = '';
      let string_command = '';
      let controlled = '';
      let is_controlled = false;
      if(command_record.controlled_id == 0) {
        command = this.getNameCommand(command_record.command);
        string_command = command_record.string_command
      } else {
        controlled = this.getNameControlled(command_record.controlled_id);
        is_controlled = true;
      }

      this.listRecord.push({
        id:             command_record.id,
        command:        command,
        string_command: string_command,
        controlled:     controlled,
        is_controlled:  is_controlled,
      });
    });
  }

  getNameCommand(command_id: number): string {
    let command_name = 'id: ' + command_id;
    this.list_commands.forEach((commands) => {
      commands.commands.forEach((command) => {
        if(command.id == command_id) {
          command_name = command.info_command;
        }
      });
    });
    return command_name;
  }

  getNameControlled(controlled_id: number): string {
    let controlled_name = 'id: ' + controlled_id;
    this.list_controlled.forEach((controlled) => {
      if(controlled.id == controlled_id) {
        controlled_name = controlled.name;
      }
    });
    return controlled_name;
  }

  onResize(event) {
    if(event.target.innerWidth < 700) {
      this.table_sm = true;
    } else {
      this.table_sm = false;
    }
  }
}
