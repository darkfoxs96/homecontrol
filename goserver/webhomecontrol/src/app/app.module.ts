import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControlComponent } from './component/control/control.component';
import { SettingsComponent } from './component/settings/settings.component';
import { CommandsComponent } from './component/commands/commands.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    SettingsComponent,
    CommandsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
