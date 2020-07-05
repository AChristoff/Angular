import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components

import {AuthGuard} from './core/guards/auth.guard';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'user', loadChildren: './components/authentication/authentication.module#AuthenticationModule'},
  {path: 'furniture', loadChildren: './components/furniture/furniture.module#FurnitureModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
