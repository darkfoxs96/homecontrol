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
import { SettingsHomeComponent } from './components/settings/settings-home/settings-home.component';
import { SettingsEmailComponent } from './components/settings/settings-email/settings-email.component';
import { SettingsInterfacesComponent } from './components/settings/settings-interfaces/settings-interfaces.component';
import { SettingsControlledsComponent } from './components/settings/settings-controlleds/settings-controlleds.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommandsComponent,
    ControlComponent,
    RemoteControllerComponent,
    SettingsComponent,
    SettingsHomeComponent,
    SettingsEmailComponent,
    SettingsInterfacesComponent,
    SettingsControlledsComponent,
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
