import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';

import {HomeComponent} from './home/home.component';
import {SigninComponent} from './authentication/signin/signin.component';
import {SignupComponent} from './authentication/signup/signup.component';

import {DropdownDirective} from './navigation/dropdown.directive';
import {CollapseDirective} from './navigation/collapse.directive';

import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './authentication/auth.service';
import {JwtInterceptorService} from './interceptors/jwt-interceptor.service';
import {ResponseInterceptorService} from './interceptors/response-interceptor.service';

import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
