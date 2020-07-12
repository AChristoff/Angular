import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavigationComponent} from './components/shared/navigation/navigation.component';

import {HomeComponent} from './components/home/home.component';

import {AuthService} from './core/services/auth.service';
import {JwtInterceptorService} from './core/interceptors/jwt-interceptor.service';
import {ResponseInterceptorService} from './core/interceptors/response-interceptor.service';

import {FooterComponent} from './components/shared/footer/footer.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {MaterialModule} from './components/shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
