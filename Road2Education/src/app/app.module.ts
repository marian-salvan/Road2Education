import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';

import { MatRippleModule, MatIconModule, MatToolbarModule, MatGridListModule, MatIconRegistry, MatListModule, MatButtonModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import { environment } from 'src/environments/environment';
import { AdminModule } from './modules/admin/admin.module';
import { DriverModule } from './modules/driver/driver.module';
import { StudentModule } from './modules/student/student.module';
import { MainPageComponent } from './main-components/main-page/main-page.component';
import { MainDashboardComponent } from './main-components/main-dashboard/main-dashboard.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SafePipe } from './shared/pipes/safe.pipe';
import { PendingAccountComponent } from './main-components/pending-account/pending-account.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MainDashboardComponent,
    SafePipe,
    PendingAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),

    // application modules
    AuthenticationModule,
    AdminModule,
    DriverModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
