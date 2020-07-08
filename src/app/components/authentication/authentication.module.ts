import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AuthService} from '../../core/services/auth.service';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {MaterialModule} from '../shared/material.module';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: SignupComponent},
    ]),
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    LoginComponent,
  ],
  providers: [
    AuthService,
  ]
})

export class AuthenticationModule {
}
