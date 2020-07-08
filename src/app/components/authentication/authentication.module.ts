import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AuthService} from '../../core/services/auth.service';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {MaterialModule} from '../shared/material.module';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'login', component: SigninComponent},
      {path: 'register', component: SignupComponent},
    ]),
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  providers: [
    AuthService,
  ]
})

export class AuthenticationModule {
}
