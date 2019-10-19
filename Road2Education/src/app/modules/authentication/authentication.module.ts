import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { RoleAuthentificationGuard } from 'src/app/services/guards/role-authentification.guard';
import { UserService } from 'src/app/services/user/user.service';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyComponent } from './verify/verify.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponentsModule } from '../base-components/base-components.module';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    VerifyComponent, 
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule, 
    BaseComponentsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [
    AuthenticationService,
    UserService
  ],
  exports: [
    LoginComponent, 
    RegisterComponent
  ]
})
export class AuthenticationModule { }
