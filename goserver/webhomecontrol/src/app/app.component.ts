import { Component } from '@angular/core';
import { LangService } from "./services/lang.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  t: LangService = new LangService();

  constructor() { }
}
