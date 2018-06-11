import { Component, Input, OnInit } from '@angular/core';

import { LangService } from "../../../services/lang.service";

@Component({
  selector: 'app-settings-controlleds',
  templateUrl: './settings-controlleds.component.html',
  styleUrls: ['./settings-controlleds.component.css']
})
export class SettingsControlledsComponent implements OnInit {
  @Input() t: LangService;

  constructor() { }

  ngOnInit() {
  }

}
