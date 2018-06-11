import { Component, Input, OnInit } from '@angular/core';

import { LangService } from "../../services/lang.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input() t: LangService;

  use_microphone = false;
  private audio = new Audio();

  constructor() { }

  ngOnInit() {
    this.audio.src = "../../../assets/sound/record.mp3";
    this.audio.load();
  }

  usedMicrophone() {
    if(!this.use_microphone) {
      this.audio.play();
      setTimeout(() => {
        this.use_microphone = !this.use_microphone;
      }, 300);
    } else {
      this.use_microphone = !this.use_microphone;
    }
  }
}
