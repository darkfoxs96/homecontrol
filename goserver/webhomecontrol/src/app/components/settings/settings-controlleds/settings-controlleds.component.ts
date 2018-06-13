import { Component, OnInit } from '@angular/core';

import { LangService } from "../../../services/lang.service";

@Component({
  selector: 'app-settings-controlleds',
  templateUrl: './settings-controlleds.component.html',
  styleUrls: ['./settings-controlleds.component.css']
})
export class SettingsControlledsComponent implements OnInit {

  constructor(public  t:    LangService,
  ) { }

  ngOnInit() {
  }

}
