import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/shared/navigation/navigation.component';

import {HomeComponent} from './components/home/home.component';

import {DropdownDirective} from './components/shared/navigation/dropdown.directive';
import {CollapseDirective} from './components/shared/navigation/collapse.directive';

import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './core/services/auth.service';
import {JwtInterceptorService} from './core/interceptors/jwt-interceptor.service';
import {ResponseInterceptorService} from './core/interceptors/response-interceptor.service';

import {ToastrModule} from 'ngx-toastr';
import {FooterComponent} from './components/shared/footer/footer.component';
import {HeaderComponent} from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
