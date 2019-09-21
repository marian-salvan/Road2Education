import { Routes } from '@angular/router';
import { Roles } from './roles';
import { MainDashboardComponent } from 'src/app/main-components/main-dashboard/main-dashboard.component';
import { LoginComponent } from 'src/app/modules/authentification/login/login.component';
import { RegisterComponent } from 'src/app/modules/authentification/register/register.component';
import { AdminDashboardComponent } from 'src/app/modules/admin/admin-dashboard/admin-dashboard.component';
import { RoleAuthentificationGuard } from 'src/app/services/guards/role-authentification.guard';
import { DriverDashboardComponent } from 'src/app/modules/driver/driver-dashboard/driver-dashboard.component';
import { StudentDashboardComponent } from 'src/app/modules/student/student-dashboard/student-dashboard.component';

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