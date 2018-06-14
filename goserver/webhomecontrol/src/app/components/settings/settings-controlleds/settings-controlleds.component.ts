import { Component, OnInit } from '@angular/core';
declare var $ :any;

import { LoadArrayService } from "../../../services/load-array.service";
import { GO_RELOAD_ARRAY } from "../../../store/actions/appActions";

import { LangService } from "../../../services/lang.service";
import { ControlledService } from "../../../services/controlled.service";

import { Controlled } from "../../../models/controlled.model";
import { StatusInterfaceServer } from "../../../models/status-interface-server.model";
import {TPHomeControlService} from "../../../services/t-p-home-control.service";
import {CommandRecord} from "../../../models/command-record.model";
import {CommandRecordService} from "../../../services/command-record.service";

@Component({
  selector: 'app-settings-controlleds',
  templateUrl: './settings-controlleds.component.html',
  styleUrls: ['./settings-controlleds.component.css']
})
export class SettingsControlledsComponent implements OnInit {
  public  list_controlled:       Controlled[]            = [];
  private list_command_record:   CommandRecord[]         = [];
  public  list_t_p_home_control: StatusInterfaceServer[] = [];

  //Form controlled:
  controlled_id:              number  = 0;
  controlled_name:            string  = '';
  controlled_host:            string  = '';
  controlled_port:            string  = '';
  controlled_common_buffer:   boolean = false;
  controlled_home_control_id: string  = '';

  select_home_control_id:     string  = '';

  //Table:
  table_sm = false;
  table_p  = false;

  constructor(public  t:             LangService,
              private storeArray:    LoadArrayService,
              private controlled:    ControlledService,
              private homeControl:   TPHomeControlService,
              private commandRecord: CommandRecordService,
  ) {
    this.storeArray.getStore().listener_store.subscribe(
      (data) => {
        if(data.type == GO_RELOAD_ARRAY) { return; }
        this.list_controlled     = data.list_controlled;
        this.list_command_record = data.list_command_record;
      }
    );
  }

  ngOnInit() {
    this.storeArray.getStore().load_array();

    this.homeControl.getStatusTPHomeControls().subscribe(
      (data) => {
        this.list_t_p_home_control = data;
      },
      (err) => {
        alert(err.error);
    }
    );

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

  deleteControlled(controlled_id: number): void {
    this.controlled.deleteControlled(controlled_id).subscribe(
      () => {
        let array_promise: Promise<void>[] = [];
        this.list_command_record.forEach((record) => {
          if(record.controlled_id == controlled_id) {
            array_promise.push(
              this.commandRecord.deleteCommandRecord(record.id).forEach(()=>{})
            )
          }
        });
        Promise.all(array_promise).then(
          () => {
          this.storeArray.getStore().load_array();
        });
      },
    (err) => {
        alert(err.error);
    }
    );
  }

  selectParam(controlled_id:              number,
              controlled_name:            string,
              controlled_host:            string,
              controlled_port:            string,
              controlled_common_buffer:   number,
              controlled_home_control_id: string): void {
    this.controlled_id              = controlled_id;
    this.controlled_name            = controlled_name;
    this.controlled_host            = controlled_host;
    this.controlled_port            = controlled_port;
    this.controlled_common_buffer   = controlled_common_buffer == 1;
    this.controlled_home_control_id = controlled_home_control_id;
  }

  selectHomeControlID(home_control_id: string) {
    this.select_home_control_id = home_control_id;
    document.getElementById('select_id_home_control_button').innerHTML = home_control_id;
  }

  goFormControlled(): void {
    if(this.controlled_id == 0) {
      this.addControlled();
    } else {
      this.editControlled();
    }
  }

  editControlled(): void {
    let formData = new FormData(document.forms.namedItem('form_add_or_edit_controlled'));

    let common_buffer = 0;
    try {
      formData.get('common_buffer').slice
      common_buffer = 1;
    } catch {}

    this.controlled.updateControlled({
      id:              this.controlled_id,
      name:            formData.get('name').toString(),
      host:            formData.get('host').toString(),
      port:            formData.get('port').toString(),
      common_buffer:   common_buffer,
      home_control_id: this.controlled_home_control_id,
    }).subscribe(
      () => {
        this.storeArray.getStore().load_array();
        $('#modal_add_controlled').modal('hide');
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  addControlled(): void {
    let formData = new FormData(document.forms.namedItem('form_add_or_edit_controlled'));

    let common_buffer = 0;
    try {
      formData.get('common_buffer').slice
      common_buffer = 1;
    } catch {}

    this.controlled.addControlled({
      id:              0,
      name:            formData.get('name').toString(),
      host:            formData.get('host').toString(),
      port:            formData.get('port').toString(),
      common_buffer:   common_buffer,
      home_control_id: this.controlled_home_control_id,
    }).subscribe(
      (data) => {
      this.list_controlled.push({
        id:              parseInt(data),
        name:            formData.get('name').toString(),
        host:            formData.get('host').toString(),
        port:            formData.get('port').toString(),
        common_buffer:   common_buffer,
        home_control_id: this.controlled_home_control_id,
      });
      $('#modal_add_controlled').modal('hide');
    },
      (err) => {
      alert(err.error);
    }
    );
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
}
