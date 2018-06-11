import { Component, OnInit } from '@angular/core';

import { CommandService } from "../../../services/command.service";
import { ControlledService } from "../../../services/controlled.service";
import { CommandRecordService } from "../../../services/command-record.service";

import { ListCommands } from "../../../models/list-commands.model";
import { Controlled } from "../../../models/controlled.model";
import { CommandRecord } from "../../../models/command-record.model";

interface IListCommand {
  id_command_record_controlled: string;
  list_id_command_record:       string[];
}

@Component({
  selector: 'app-remote-controller',
  templateUrl: './remote-controller.component.html',
  styleUrls: ['./remote-controller.component.css']
})
export class RemoteControllerComponent implements OnInit {
  public audio = new Audio();
  ListCommand: IListCommand[] = [];
  is_ready: number[] = [];

  public list_commands: ListCommands[] = [];
  public list_controlled: Controlled[] = [];
  public list_command_record: CommandRecord[] = [];

  constructor(private commandService: CommandService,
              private controlled: ControlledService,
              private commandRecord: CommandRecordService
  ) { }

  ngOnInit() {
    this.commandService.getCommands().subscribe(
      (data) => {
        this.list_commands = data;
        this.createListCommand();
      },
      (err) => {
        alert(err.error)
      }
    );

    this.controlled.getControlleds().subscribe(
      (data) => {
        this.list_controlled = data;
        this.createListCommand();
      },
      (err) => {
        alert(err.error)
      }
    );

    this.commandRecord.getCommandRecords().subscribe(
      (data) => {
        this.list_command_record = data;
        this.createListCommand();
      },
      (err) => {
        alert(err.error)
      }
    );

    this.audio.src = "../../../assets/sound/click.mp3";
    this.audio.load();
  }

  // createListCommand
  private createListCommand() {
    if (this.is_ready.length != 2) {
      this.is_ready.push(0);
      return;
    }

    this.list_command_record.forEach((command_record) => {
      if (command_record.controlled_id != 0) {
        this.ListCommand.push({
          id_command_record_controlled: command_record.id,
          list_id_command_record: [],
        });
      }
    });

    let map_controlled: { [key: number]: Controlled } = {0: new Controlled()};
    this.list_controlled.forEach((controlled) => {
      map_controlled[controlled.id] = controlled;
    });

    let map_command: {[key: string]: CommandRecord} = {'': new CommandRecord()};
    this.list_command_record.forEach((command_record) => {
      map_command[command_record.id] = command_record;
    });

    this.list_command_record.forEach((command_record) => {
      if (command_record.controlled_id == 0) {
        if(this.isCommandForControlled(command_record.command)) {
          this.ListCommand.forEach((command, index) =>{
            let id_thhomecontrol: string =  map_controlled[map_command[command.id_command_record_controlled].controlled_id].home_control_id;
            if(id_thhomecontrol == '') {
              if(command_record.id.length > 15) {
                this.ListCommand[index].list_id_command_record.push(command_record.id.slice(0, 15));
              } else {
                this.ListCommand[index].list_id_command_record.push(command_record.id);
              }
            }
          });
        } else {
          let nameTPHomeControl = this.getNameTPHomeControl(command_record.command);
          this.ListCommand.forEach((command, index) => {
            let name = map_controlled[map_command[command.id_command_record_controlled].controlled_id].home_control_id;
            if(name == nameTPHomeControl) {
              if(command_record.id.length > 15) {
                this.ListCommand[index].list_id_command_record.push(command_record.id.slice(0, 15));
              } else {
                this.ListCommand[index].list_id_command_record.push(command_record.id);
              }
            }
          });
        }
      }
    });
    // add attribute
    this.setAttribute()
  }

  private isCommandForControlled(command: number): boolean {
    let result = false;
    this.list_commands.forEach((commands) => {
      if(commands.name_interface == 'controlled') {
        if(commands.start_range_id_commands <= command && commands.end_range_id_commands >= command) {
          result = true;
          return;
        } else {
          result = false;
          return;
        }
      }
    });
    return result;
  }

  private getNameTPHomeControl(command: number): string {
    let name = '';
    this.list_commands.forEach((commands) => {
      if(commands.start_range_id_commands <= command && commands.end_range_id_commands >= command) {
        name = commands.name_interface;
      }
    });
    return name;
  }

  // Add attribute
  private setAttribute() {
    let status = true;
    let result = document.getElementsByClassName("remote_controller_accordion");
    for(let i = 0; i < this.ListCommand.length; i++) {
      if(result.item(i) === null) {
        status = false;
        break;
      }
      let name = result.item(i).getAttribute('name');
      result.item(i).setAttribute('href', '#' + name);
      result.item(i).setAttribute('aria-controls', name);
    }
    if(!status) {
      setTimeout(() => {
        this.setAttribute();
      }, 150);
    }
  }

  // Go string command to server
  public goTextCommandToServer(button) {
    this.audio.play();
    let buffer = (<any>document.getElementById('recording_string_command_input')).value;
    let command = button.target.getAttribute('name');
    this.commandRecord.useText(command, buffer).subscribe(
      (data) => {},
      (err) => {
        alert(err.error);
      }
    );
  }

  goScroll() {
    setTimeout(() => {
      window.scrollTo(0, document.getElementById('remote_controller_header').offsetTop);
    }, 350);
  }
}
