import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule, MatIconModule } from '@angular/material';
import { AuthentificationModule } from './modules/authentification/authentification.module';

import { AdminModule } from './modules/admin/admin.module';
import { DriverModule } from './modules/driver/driver.module';
import { StudentModule } from './modules/student/student.module';
import { MainPageComponent } from './main-components/main-page/main-page.component';
import { MainDashboardComponent } from './main-components/main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatIconModule,

    // application modules
    AuthentificationModule,
    AdminModule,
    DriverModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
