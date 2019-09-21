import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule, MatIconModule } from '@angular/material';
import { AuthentificationModule } from './modules/authentification/authentification.module';
import { LoginComponent } from './modules/authentification/login/login.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatIconModule,

    // application modules
    AuthentificationModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
