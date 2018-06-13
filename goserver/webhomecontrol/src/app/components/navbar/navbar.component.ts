import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  visible_control = true;
  visible_settings = false;
  visible_commands = false;

  constructor(public t: LangService,
  ) { }

  ngOnInit() {
  }

  visibleControl(): void {
    this.visible_settings = false;
    this.visible_commands = false;
    this.visible_control = true;
  }

  visibleSettings(): void {
    this.visible_control = false;
    this.visible_commands = false;
    this.visible_settings = true;
  }

  visibleCommands(): void {
    this.visible_control = false;
    this.visible_settings = false;
    this.visible_commands = true;
  }
}
