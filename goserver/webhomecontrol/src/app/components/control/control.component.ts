import { Component, OnInit } from '@angular/core';

import { CommandRecordService } from "../../services/command-record.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private commandRecord: CommandRecordService) { }

  ngOnInit() {
  }

}
