import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import {LabsComponent} from './labs/labs.component';
import { CoursesComponent } from './courses/courses.component';
import {ProfileComponent} from './profile/profile.component';

export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'menu', component: NavbarComponent},
    { path: 'menu', component: NavbarComponent,
      children: [
        { path: 'courses', component: CoursesComponent },
        { path: 'labs', component: LabsComponent },
        {path: 'profile',component: ProfileComponent}
      ]
    }
  ];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);