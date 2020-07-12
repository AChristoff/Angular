import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AuthService} from '../../core/services/auth.service';
import {LoginComponent} from './login/login.component';

import {MaterialModule} from '../shared/material.module';
import {RegisterComponent} from './register/register.component';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register/confirm/:token', component: RegisterConfirmComponent},
    ]),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterConfirmComponent,
  ],
  providers: [
    AuthService,
  ]
})

export class AuthenticationModule {
}
