import { Routes } from '@angular/router';
import { Roles } from './roles';
import { MainDashboardComponent } from 'src/app/main-components/main-dashboard/main-dashboard.component';
import { AdminDashboardComponent } from 'src/app/modules/admin/admin-dashboard/admin-dashboard.component';
import { RoleAuthentificationGuard } from 'src/app/services/guards/role-authentification.guard';
import { UserValidatedGuard } from 'src/app/services/guards/validation-authentification.guard';
import { DriverDashboardComponent } from 'src/app/modules/driver/driver-dashboard/driver-dashboard.component';
import { StudentDashboardComponent } from 'src/app/modules/student/student-dashboard/student-dashboard.component';
import { LoginComponent } from 'src/app/modules/authentication/login/login.component';
import { RegisterComponent } from 'src/app/modules/authentication/register/register.component';
import { ResetPasswordComponent } from 'src/app/modules/authentication/reset-password/reset-password.component';
import { VerifyComponent } from 'src/app/modules/authentication/verify/verify.component';
import { OfferCreatorComponent } from 'src/app/modules/driver/offer-creator/offer-creator.component';
import { OffersViewerComponent } from 'src/app/modules/driver/offers-viewer/offers-viewer.component';
import { DriverValidationComponent } from 'src/app/modules/driver/driver-validation/driver-validation.component';
import { PendingAccountComponent } from 'src/app/main-components/pending-account/pending-account.component';
import { UserPendingValidationGuard, UserNoPendingValidationGuard } from 'src/app/services/guards/pending-validation.guard';
import { StudentValidationComponent } from 'src/app/modules/student/student-validation/student-validation.component';
import { RequestCreatorComponent } from 'src/app/modules/student/request-creator/request-creator.component';
import { ActivityPageComponent } from 'src/app/main-components/activity-page/activity-page.component';
import { TeamPageComponent} from 'src/app/main-components/team-page/team-page.component';
import { ContactPageComponent } from 'src/app/main-components/contact-page/contact-page.component';
import { TutorialPageComponent } from 'src/app/main-components/tutorial-page/tutorial-page.component';

export const ROUTES: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'home', component: MainDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'activity', component: ActivityPageComponent },
  { path: 'team', component: TeamPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'tutorial', component: TutorialPageComponent},
  {
    path: 'account/pending',
    component: PendingAccountComponent,
    canActivate: [UserPendingValidationGuard],
  },
  {
    path: 'driver/validate',
    component: DriverValidationComponent,
    canActivate: [RoleAuthentificationGuard, UserNoPendingValidationGuard],
    data: {
      expectedRole: Roles.Driver
    }
  },
  {
    path: 'driver/offers',
    component: OffersViewerComponent,
    canActivate: [RoleAuthentificationGuard, UserValidatedGuard],
    data: {
      expectedRole: Roles.Driver,
      validationPath: 'driver/validate'
    }
  },
  {
    path: 'driver/offers/new', 
    component: OfferCreatorComponent,
    canActivate: [RoleAuthentificationGuard, UserValidatedGuard],
    data: {
        expectedRole: Roles.Driver,
        validationPath: 'driver/validate'
    }
  },
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
    canActivate: [RoleAuthentificationGuard, UserValidatedGuard],
    data: { 
      expectedRole: Roles.Driver,
      validationPath: 'driver/validate'
    }
  },
  {
    path: 'student',
    component: StudentDashboardComponent,
    canActivate: [RoleAuthentificationGuard, UserValidatedGuard],
    data: {
      expectedRole: Roles.Student,
      validationPath: 'student/validate'
    }
  },
  {
    path: 'student/validate',
    component: StudentValidationComponent,
    canActivate: [RoleAuthentificationGuard, UserNoPendingValidationGuard],
    data: {
      expectedRole: Roles.Student
    }
  },
  {
    path: 'student/requests/new',
    component: RequestCreatorComponent,
    canActivate: [RoleAuthentificationGuard, UserValidatedGuard],
    data: {
        expectedRole: Roles.Student,
        validationPath: 'student/validate'
    }
  },
  { path: '**', redirectTo: '' }
];
