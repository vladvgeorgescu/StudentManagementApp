import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { routing, appRoutingProviders } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthService } from './auth.service'; 
import { RegistrationService } from './registration.service';
import { LabsComponent } from './labs/labs.component';
import { UserService } from './user.service';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    LabsComponent,
    CoursesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [
    AuthService,
    RegistrationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
