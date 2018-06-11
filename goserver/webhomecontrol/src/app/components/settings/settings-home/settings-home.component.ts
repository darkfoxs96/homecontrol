import { Component, Input, OnInit } from '@angular/core';

import { LangService } from "../../../services/lang.service";

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.css']
})
export class SettingsHomeComponent implements OnInit {
  @Input() t: LangService;

  constructor() { }

  ngOnInit() {
  }

}
