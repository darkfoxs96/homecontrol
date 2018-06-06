import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// Services:
import { LangService } from './services/lang.service';
import { CommandRecordService } from "./services/command-record.service";

// Components:
import { AppComponent } from './app.component';
import { ControlComponent } from './components/control/control.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CommandsComponent } from './components/commands/commands.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    SettingsComponent,
    CommandsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    LangService,
    CommandRecordService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
