import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {FurnitureService} from './furniture/furniture.service';

import {ToastrModule} from 'ngx-toastr';

import {CreateFurnitureComponent} from './furniture/create-furniture/create-furniture.component';
import {FurnitureAllComponent} from './furniture/furniture-all/furniture-all.component';
import {FurnitureDetailsComponent} from './furniture/furniture-details/furniture-details.component';
import {FurnitureUserComponent} from './furniture/furniture-user/furniture-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    FurnitureAllComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    FurnitureService,
    {provide: [HTTP_INTERCEPTORS], useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
