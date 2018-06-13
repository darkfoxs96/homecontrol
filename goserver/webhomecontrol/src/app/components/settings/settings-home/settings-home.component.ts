import { Component, Input, OnInit } from '@angular/core';

declare var recordingSetSampleRate: (sample_rate: number) => Error;
declare var recordingGetSampleRate: () => number;

import { LangService } from "../../../services/lang.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.css']
})
export class SettingsHomeComponent implements OnInit {
  @Input() t: LangService;

  constructor(private user: UserService,
  ) { }

  ngOnInit() {
  }

  setLang(lang: string): void {
    let err = this.t.setLang(lang);
    if(err) {
      alert(err.message);
      return;
    }
    document.getElementById('select_use_lang').innerHTML = lang;
  }

  setSampleRate(): void {
    let sample_rate = (<any>document.getElementById('recording_used_sample_rate')).value;

    let err = recordingSetSampleRate(parseInt(sample_rate));
    if(err) {
      alert(err.message);
      return;
    }
  }

  getSampleRate(): number {
    return recordingGetSampleRate();
  }

  newPassword(): void {
    let formData = new FormData(document.forms.namedItem('form_new_password_create'));

    let old_password = formData.get('old_password').toString();
    let new_password = formData.get('new_password').toString();

    this.user.passwordNew(old_password, new_password).subscribe(
      () => {
        alert('Ok')
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  logout(): void {
    this.user.logout().subscribe(
      () => {},
      (err) => {
        alert(err.error);
      }
    );
  }
}
