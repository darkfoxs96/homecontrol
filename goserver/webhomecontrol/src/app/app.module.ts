import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// Services:
import { LangService } from './services/lang.service';
import { CommandRecordService } from "./services/command-record.service";
import { CommandService } from "./services/command.service";
import { ControlledService } from "./services/controlled.service";
import { UseControlService } from "./services/use-control.service";
import { UserService } from "./services/user.service";
import { SoundParsingService } from "./services/sound-parsing.service";
import { BotMessengerService } from "./services/bot-messenger.service";
import { TPHomeControlService } from "./services/t-p-home-control.service";

// Components:
import { AppComponent } from './app.component';
import { ControlComponent } from './components/control/control.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CommandsComponent } from './components/commands/commands.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RemoteControllerComponent } from './components/control/remote-controller/remote-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    SettingsComponent,
    CommandsComponent,
    NavbarComponent,
    RemoteControllerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    LangService,
    CommandRecordService,
    CommandService,
    ControlledService,
    UseControlService,
    UserService,
    SoundParsingService,
    BotMessengerService,
    TPHomeControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
