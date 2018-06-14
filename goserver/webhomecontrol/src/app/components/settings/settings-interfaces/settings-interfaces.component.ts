import { Component, OnInit } from '@angular/core';

import { LangService } from "../../../services/lang.service";
import { SoundParsingService } from "../../../services/sound-parsing.service";
import { TPHomeControlService } from "../../../services/t-p-home-control.service";
import { BotMessengerService } from "../../../services/bot-messenger.service";

import { StatusInterfaceServer } from "../../../models/status-interface-server.model";

@Component({
  selector: 'app-settings-interfaces',
  templateUrl: './settings-interfaces.component.html',
  styleUrls: ['./settings-interfaces.component.css']
})
export class SettingsInterfacesComponent implements OnInit {
  // Interface
  select_type_interface = '';
  select_name_interface = '';

  map_interface: {[key: string]: StatusInterfaceServer[]} = {['']: []};

  // Settings
  list_field_settings: string[][] = [[]];

  constructor(public  t:             LangService,
              private soundParsing:  SoundParsingService,
              private tpHomeControl: TPHomeControlService,
              private botMessenger:  BotMessengerService,
  ) { }

  ngOnInit() {
    let list_sound_interface:   StatusInterfaceServer[] = [];
    let list_control_interface: StatusInterfaceServer[] = [];
    let list_bot_interface:     StatusInterfaceServer[] = [];

    Promise.all([
      this.soundParsing.getStatusSoundParsings().forEach(
        (data) => {
          list_sound_interface = data;
        }
      ),
      this.tpHomeControl.getStatusTPHomeControls().forEach(
        (data) => {
          list_control_interface = data;
        }
      ),
      this.botMessenger.getStatusBotMessengers().forEach(
        (data) => {
          list_bot_interface = data;
        }
      ),
    ]).then(
      () => {
        this.createMap(list_sound_interface, list_control_interface, list_bot_interface);
    });
  }

  createMap(list_sound_interface:   StatusInterfaceServer[],
            list_control_interface: StatusInterfaceServer[],
            list_bot_interface:     StatusInterfaceServer[]): void {
    this.map_interface['Sound parsing']   = list_sound_interface;
    this.map_interface['TP home control'] = list_control_interface;
    this.map_interface['Bot messenger']   = list_bot_interface;

    this.selectTypeInterface('Sound parsing');
    this.loadSettings();
  }

  setSettings(): void {
    if(this.select_name_interface == '') {
      return;
    }

    let formData = new FormData(document.forms.namedItem('form_settings_interface'));

    let settings = {};
    (<any>formData).forEach(function(value, key){
      settings[key] = value;
    });

    switch (this.select_type_interface) {
      case 'Sound parsing':
        this.soundParsing.setSettings(this.select_name_interface, settings).subscribe(
          () => {
            alert('Ok');
          },
          (err) => {
            alert(err.error);
          }
        );
        break;
      case 'TP home control':
        this.tpHomeControl.setSettings(this.select_name_interface, settings).subscribe(
          () => {
            alert('Ok');
          },
          (err) => {
            alert(err.error);
          }
        );
        break;
      case 'Bot messenger':
        this.botMessenger.setSettings(this.select_name_interface, settings).subscribe(
          () => {
            alert('Ok');
          },
          (err) => {
            alert(err.error);
          }
        );
        break;
      default:
        alert('error: type interface not found');
        break;
    }
  }

  loadSettings(): void {
    if(this.select_name_interface == '') {
      this.list_field_settings = [];
      return;
    }
    switch (this.select_type_interface) {
      case 'Sound parsing':
        this.soundParsing.getSettings(this.select_name_interface).subscribe(
          (data) => {
            this.list_field_settings = data;
          },
          (err) => {
            alert(err.error);
          }
        );
        break;
      case 'TP home control':
        this.tpHomeControl.getSettings(this.select_name_interface).subscribe(
          (data) => {
            this.list_field_settings = data;
          },
          (err) => {
            alert(err.error);
          }
        );
        break;
      case 'Bot messenger':
        this.botMessenger.getSettings(this.select_name_interface).subscribe(
          (data) => {
            this.list_field_settings = data;
          },
          (err) => {
            alert(err.error);
          }
        );
        break;
      default:
        alert('error: type interface not found');
        break;
    }
  }

  selectTypeInterface(type_interface: string): void {
    this.select_type_interface = type_interface;
    document.getElementById('select_type_interface_button').innerHTML = type_interface;
    this.selectNameInterface(this.map_interface[type_interface] ? this.map_interface['Sound parsing'][0].name_id : '');
  }

  selectNameInterface(name_iterface: string): void {
    this.select_name_interface = name_iterface;
    document.getElementById('select_name_interface_button').innerHTML = name_iterface;

    this.loadSettings();
  }
}
