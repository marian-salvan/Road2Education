import { Routes } from '@angular/router';
import { MainDashboardComponent } from '../main-components/main-dashboard/main-dashboard.component';
import { DriverDashboardComponent } from '../modules/driver/driver-dashboard/driver-dashboard.component';
import { RoleAuthentificationGuard } from '../services/guards/role-authentification.guard';
import { AdminDashboardComponent } from '../modules/admin/admin-dashboard/admin-dashboard.component';
import { Roles } from './roles';
import { StudentDashboardComponent } from '../modules/student/student-dashboard/student-dashboard.component';
import { LoginComponent } from '../modules/authentification/login/login.component';
import { RegisterComponent } from '../modules/authentification/register/register.component';

export const ROUTES: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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