import { Component, OnInit } from '@angular/core';

import { LangService } from "../../../services/lang.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-settings-email',
  templateUrl: './settings-email.component.html',
  styleUrls: ['./settings-email.component.css']
})
export class SettingsEmailComponent implements OnInit {
  smtp_list: string[] = [];
  select_smtp         = '';

  constructor(public  t:    LangService,
              private user: UserService,
  ) { }

  ngOnInit() {
    this.user.getSMTPServer().subscribe(
      (data) => {
        this.smtp_list = data;
        this.selectSMTPServer(this.smtp_list[0]);
      },
      (err) => {
        alert(err.error)
    }
    );
  }

  selectSMTPServer(smtp: string): void {
    this.select_smtp = smtp;
    document.getElementById('select_smtp_server').innerHTML = smtp;
  }

  setEmail(): void {
    let formData = new FormData(document.forms.namedItem('form_set_email'));

    let password       = formData.get('password').toString();
    let email_password = formData.get('email_password').toString();
    let email_login    = formData.get('email_login').toString();

    if(password          == '' ||
       email_password    == '' ||
       email_login       == '' ||
       this.select_smtp  == ''
    ) {
      alert(this.t.T('There is an empty field'));
      return;
    }

    this.user.settingsEmail(password, email_login, email_password, this.select_smtp).subscribe(
      () => {
        alert('Ok')
      },
      (err) => {
        alert(err.error)
      }
    );
  }
}
