import { NgModule } from '@angular/core';
// Material modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

// Auth Components
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';


@NgModule({
  imports:[
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
    UserForgotPasswordComponent,
    UserProfilePageComponent
  ],
  exports: [
    UserLoginComponent,
    UserSignupComponent,
    UserForgotPasswordComponent,
    UserProfilePageComponent
  ]
})
export class AuthModule { }
