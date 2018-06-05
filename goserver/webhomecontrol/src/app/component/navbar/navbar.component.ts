import { Component, OnInit } from '@angular/core';

import { AppLang } from '../../app.lang';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appLang = new AppLang();

  visible_control = true;
  visible_settings = false;
  visible_commands = false;

  constructor() { }

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


// Testing
  langers() {
    if(localStorage.getItem('lang_use') == 'en-US' || localStorage.getItem('lang_use') == '') {
      localStorage.setItem('lang_use', 'ru-RU');
    } else {
      localStorage.setItem('lang_use', 'en-US');
    }
    location.reload();
  }
}
