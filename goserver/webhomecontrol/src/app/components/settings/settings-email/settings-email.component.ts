import { Component, Input, OnInit } from '@angular/core';

import { LangService } from "../../../services/lang.service";

@Component({
  selector: 'app-settings-email',
  templateUrl: './settings-email.component.html',
  styleUrls: ['./settings-email.component.css']
})
export class SettingsEmailComponent implements OnInit {
  @Input() t: LangService;

  constructor() { }

  ngOnInit() {
  }

}
