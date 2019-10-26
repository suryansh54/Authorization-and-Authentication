import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Components
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';

const routes: Routes = [
    {
        path:'login',
        component: UserLoginComponent
    },
    {
        path:'sign-up',
        component: UserSignupComponent
    },
    {
        path:'forgot-password',
        component: UserForgotPasswordComponent
    },
    {
        path:'user-profile-page',
        component: UserProfilePageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
