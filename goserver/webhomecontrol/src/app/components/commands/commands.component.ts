import { Component, Input, OnInit } from '@angular/core';
declare var $ :any;

import { LangService } from "../../services/lang.service";
import { CommandRecordService } from "../../services/command-record.service";
import { ControlledService } from "../../services/controlled.service";
import { LoadArrayService } from "../../services/load-array.service";
import { GO_RELOAD_ARRAY } from "../../store/actions/appActions";

import { Controlled } from "../../models/controlled.model";
import { CommandRecord } from "../../models/command-record.model";
import { Command, ListCommands } from "../../models/list-commands.model";

interface IRecord {
  id:             string,
  command:        string,
  string_command: string,
  controlled:     string,
  is_controlled:  boolean,
}

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {
  @Input() t: LangService;

  public  listRecord: IRecord[] = [];

  // Add command
  visibl_add_command      = true;
  command_id              = 0;
  list_inteface: string[] = [];
  select_interface        = '';

  map_command_info: {[key: string]: Command[]} = {['']: []};
  visibl_add_callsign  = false;

  select_controlled_id = 0;
  // Table
  public  table_sm = false;
  public  table_p = false;

  public  map_command_record: {[key: string]: CommandRecord} = {['']: new CommandRecord()};

  private list_commands: ListCommands[] = [];
  public  list_controlled: Controlled[] = [];
  private list_command_record: CommandRecord[] = [];

  constructor(private storeArray: LoadArrayService,
              private commandRecord: CommandRecordService,
              private controlled: ControlledService,
  ) {
    this.storeArray.getStore().listener_store.subscribe(
      (data) => {
        if(data.type == GO_RELOAD_ARRAY) { return; }
        this.list_commands       = data.list_commands;
        this.list_controlled     = data.list_controlled;
        this.list_command_record = data.list_command_record;
        this.createListRecord();
      }
    );
  }

  ngOnInit() {
    this.storeArray.getStore().load_array();

    let w = window.innerWidth;
    if(w < 700) {
      this.table_sm = true;
    } else {
      this.table_sm = false;
    }
    if(w > 1000) {
      this.table_p = true;
    } else {
      this.table_p = false;
    }
  }

  // createListRecord
  private createListRecord(): void {
    let list_create_record:IRecord[] = [];

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

      list_create_record.push({
        id:             command_record.id,
        command:        command,
        string_command: string_command,
        controlled:     controlled,
        is_controlled:  is_controlled,
      });
    });

    this.listRecord = list_create_record;

    //Create list for add command
    this.createListNameInterface();
  }

  getNameCommand(command_id: number): string {
    let command_name = 'id: ' + command_id;
    let first_name = command_name;
    this.list_commands.forEach((commands) => {
      commands.commands.forEach((command) => {
        if(command.id == command_id) {
          command_name = command.info_command;
          return;
        }
      });
      if(first_name != command_name) return;
    });
    return command_name;
  }

  getNameControlled(controlled_id: number): string {
    let controlled_name = 'id: ' + controlled_id;
    this.list_controlled.forEach((controlled) => {
      if(controlled.id == controlled_id) {
        controlled_name = controlled.name;
        return;
      }
    });
    return controlled_name;
  }

  onResize(event): void {
    if(event.target.innerWidth < 700) {
      this.table_sm = true;
    } else {
      this.table_sm = false;
    }
    if(event.target.innerWidth > 1000) {
      this.table_p = true;
    } else {
      this.table_p = false;
    }
  }

  deleteCommand(command_id: string): void {
    this.commandRecord.deleteCommandRecord(command_id).subscribe(
      (data) => {
        let element = document.getElementById('list_command_row_' + command_id);
        element.parentNode.removeChild(element);
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  // Add command
  createListNameInterface(): void {
    let list_create_inteface: string[] = [];

    this.list_controlled.forEach((controlled) => {
      if(controlled.home_control_id != '') {
        list_create_inteface.push(controlled.home_control_id)
      }
    });
    list_create_inteface.push('controlled');

    this.list_commands.forEach((commands) => {
      this.map_command_info[commands.name_interface] = commands.commands;
    });

    this.list_inteface = list_create_inteface;
  }

  typeCommandControlButton(type: string, name: string): void {
    switch (type) {
      case 'command':
        this.visibl_add_command = true;
        this.visibl_add_callsign = false;
        break;
      case 'callsign':
        this.visibl_add_command = false;
        this.visibl_add_callsign = true;
        break;
    }
    document.getElementById('type_command_button').innerHTML = name;
  }

  goSelectInterface(name: string): void {
    this.select_interface = name;
    document.getElementById('name_interface_for_command').innerHTML = name;
  }

  goSelectCommandID(command_id: number, command_info: string): void {
    this.command_id = command_id;
    document.getElementById('select_id_command_button').innerHTML = command_info;
  }

  goSelectControlledID(controlled_id: number, controlled_name): void {
    this.select_controlled_id = controlled_id;
    document.getElementById('select_id_controlled_button').innerHTML = controlled_name;
  }

  addCommand(): void {
    let id = (<any>document.getElementById('add_command_name_input')).value;
    if(id == '') {
      alert(this.t.T('Empty command'))
      return;
    }
    if(this.visibl_add_command) {
      this.commandRecord.addOrUpdateCommandRecord({
        id: id,
        type_record: 2,
        command: this.command_id,
        string_command: (<any>document.getElementById('add_command_string_input')).value,
        number_of_words: 0,
        controlled_id: 0,
      }).subscribe(
        (data) => {
          $('#modal_add_command').modal('hide');
          this.listRecord.push({
            id: id,
            command: this.getNameCommand(this.command_id),
            string_command: (<any>document.getElementById('add_command_string_input')).value,
            controlled: '',
            is_controlled: false,
          });
          this.storeArray.getStore().load_array();
        },
        (err) => {
          alert(err.error)
        });
    }
    if(this.visibl_add_callsign) {
      let array_id = id.split(" ");
      if(array_id.length > 1) {
        alert(this.t.T('No more than one word'))
        return;
      }
      this.commandRecord.addOrUpdateCommandRecord({
        id: id,
        type_record: 1,
        command: 0,
        string_command: '',
        number_of_words: 0,
        controlled_id: this.select_controlled_id,
      }).subscribe(
        (data) => {
          $('#modal_add_command').modal('hide');
          this.listRecord.push({
            id: id,
            command: '',
            string_command: '',
            controlled: this.getNameControlled(this.select_controlled_id),
            is_controlled: true,
          });
          this.storeArray.getStore().load_array();
      },
        (err) => {
          alert(err.error)
        });
    }
  }
}
