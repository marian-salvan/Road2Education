import { Routes } from '@angular/router';
import { Roles } from './roles';
import { MainDashboardComponent } from 'src/app/main-components/main-dashboard/main-dashboard.component';
import { AdminDashboardComponent } from 'src/app/modules/admin/admin-dashboard/admin-dashboard.component';
import { RoleAuthentificationGuard } from 'src/app/services/guards/role-authentification.guard';
import { DriverDashboardComponent } from 'src/app/modules/driver/driver-dashboard/driver-dashboard.component';
import { StudentDashboardComponent } from 'src/app/modules/student/student-dashboard/student-dashboard.component';
import { LoginComponent } from 'src/app/modules/authentication/login/login.component';
import { RegisterComponent } from 'src/app/modules/authentication/register/register.component';
import { ResetPasswordComponent } from 'src/app/modules/authentication/reset-password/reset-password.component';
import { VerifyComponent } from 'src/app/modules/authentication/verify/verify.component';
import { OfferCreatorComponent } from 'src/app/modules/driver/offer-creator/offer-creator.component';
import { OffersViewerComponent } from 'src/app/modules/driver/offers-viewer/offers-viewer.component';

export const ROUTES: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'driver/offers', component: OffersViewerComponent },
  { path: 'driver/offers/new', component: OfferCreatorComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent, 
    canActivate: [RoleAuthentificationGuard],
    data: {
        expectedRole: Roles.Admin
    }
  },
  { 
    path: 'driver', 
    component: DriverDashboardComponent,
    canActivate: [RoleAuthentificationGuard],
    data: { 
      expectedRole: Roles.Driver
    }
  },
  { 
    path: 'student', 
    component: StudentDashboardComponent, 
    canActivate: [RoleAuthentificationGuard], 
    data: { 
      expectedRole: Roles.Student
    } 
  },
  { path: '**', redirectTo: '' }
];