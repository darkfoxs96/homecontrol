import { Component, OnInit } from '@angular/core';
declare var $ :any;

import { LangService } from "./services/lang.service";
import { UserService } from "./services/user.service";
import { LoadArrayService } from "./services/load-array.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public  t:         LangService,
              private user:      UserService,
              private loadArray: LoadArrayService,
  ) {
  }

  ngOnInit() {
    this.user.getSMTPServer().subscribe(
      () => {},
      (err) => {
        if(err.status == 401) {
          $('#modal_login_user').modal('show');
        }
      }
    );
  }

  login() {
    let password: string = (<any>document.getElementById('login_password_user')).value;

    this.user.login(password).subscribe(
      () => {
        this.loadArray.getStore().load_array();
        $('#modal_login_user').modal('hide');
      },
      (err) => {
        alert(err.error)
      }
    );
  }
}
