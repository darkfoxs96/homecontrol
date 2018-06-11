import { Input, Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() t: LangService;

  visible_control = true;
  visible_settings = false;
  visible_commands = false;

  constructor() {
  }

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
      this.t.setLang('ru-RU');
    } else {
      localStorage.setItem('lang_use', 'en-US');
      this.t.setLang('en-US');
    }
  }
}
