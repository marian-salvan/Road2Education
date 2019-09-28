import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { RoleAuthentificationGuard } from 'src/app/services/guards/role-authentification.guard';
import { UserService } from 'src/app/services/user/user.service';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyComponent } from './verify/verify.component';

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

    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
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
