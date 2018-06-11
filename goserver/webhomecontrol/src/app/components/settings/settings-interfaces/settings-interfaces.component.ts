import { Component, Input, OnInit } from '@angular/core';

import { LangService } from "../../../services/lang.service";

@Component({
  selector: 'app-settings-interfaces',
  templateUrl: './settings-interfaces.component.html',
  styleUrls: ['./settings-interfaces.component.css']
})
export class SettingsInterfacesComponent implements OnInit {
  @Input() t: LangService;

  constructor() { }

  ngOnInit() {
  }

}
