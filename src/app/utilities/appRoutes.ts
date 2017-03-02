import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { StatusComponent } from '../components/status/status.component';
import { UsersComponent } from '../components/users/users.component';
import { UnauthorizedComponent } from '../components/unauthorized/unauthorized.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'status', pathMatch: 'full' },
            { path: 'status', component: StatusComponent },
            { path: 'users', component: UsersComponent }
        ]
    },
    { path: 'unauthorized', component: UnauthorizedComponent }
];
