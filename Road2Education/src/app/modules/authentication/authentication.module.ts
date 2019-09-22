import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { RoleAuthentificationGuard } from 'src/app/services/guards/role-authentification.guard';
import { UserService } from 'src/app/services/user/user.service';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatFormFieldModule,
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
