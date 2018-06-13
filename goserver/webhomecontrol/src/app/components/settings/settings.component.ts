import { Component, OnInit } from '@angular/core';

import { LangService } from "../../services/lang.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // Visible components
  visible_home        = true;
  visible_email       = false;
  visible_controlleds = false;
  visible_interfaces  = false;

  constructor(public t: LangService,
  ) { }

  ngOnInit() {
  }

  // Visible components
  visibleHome(): void {
    this.visible_home        = true;
    this.visible_email       = false;
    this.visible_controlleds = false;
    this.visible_interfaces  = false;
  }

  visibleEmail(): void {
    this.visible_home        = false;
    this.visible_email       = true;
    this.visible_controlleds = false;
    this.visible_interfaces  = false;
  }

  visibleControlleds(): void {
    this.visible_home        = false;
    this.visible_email       = false;
    this.visible_controlleds = true;
    this.visible_interfaces  = false;
  }

  visibleInterfaces(): void {
    this.visible_home        = false;
    this.visible_email       = false;
    this.visible_controlleds = false;
    this.visible_interfaces  = true;
  }
}
