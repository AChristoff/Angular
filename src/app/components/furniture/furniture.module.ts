import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FurnitureAllComponent} from './furniture-all/furniture-all.component';
import {CreateFurnitureComponent} from './create-furniture/create-furniture.component';
import {FurnitureDetailsComponent} from './furniture-details/furniture-details.component';
import {FurnitureUserComponent} from './furniture-user/furniture-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FurnitureService} from '../../core/services/furniture.service';
import {RouterModule} from '@angular/router';
import {FurnitureEditComponent} from './furniture-edit/furniture-edit.component';
import {SingleFurnitureResolver} from '../../core/resolvers/single-furniture.resolver';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreateFurnitureComponent},
      {path: 'all', component: FurnitureAllComponent},
      {path: 'edit/:id', component: FurnitureEditComponent},
      {path: 'details/:id', component: FurnitureDetailsComponent, resolve: {furniture: SingleFurnitureResolver}},
      {path: 'user', component: FurnitureUserComponent},
    ]),
  ],
  declarations: [
    FurnitureAllComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
    FurnitureEditComponent,
  ],
  providers: [
    FurnitureService,
  ]
})
export class FurnitureModule {
}
