import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FurnitureAllComponent} from './furniture-all/furniture-all.component';
import {CreateFurnitureComponent} from './create-furniture/create-furniture.component';
import {FurnitureDetailsComponent} from './furniture-details/furniture-details.component';
import {FurnitureUserComponent} from './furniture-user/furniture-user.component';
import {FurnitureEditComponent} from './furniture-edit/furniture-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FurnitureService} from '../../core/services/furniture.service';
import {RouterModule} from '@angular/router';
import {SingleFurnitureResolver} from '../../core/resolvers/single-furniture.resolver';
import {FurnitureCardComponent} from './shared/furniture-card/furniture-card.component';
import { FurnitureFormComponent } from './shared/furniture-form/furniture-form.component';
import {MaterialModule} from '../shared/material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreateFurnitureComponent},
      {path: 'all', component: FurnitureAllComponent},
      {path: 'edit/:id', component: FurnitureEditComponent, resolve: {furnitureData: SingleFurnitureResolver}},
      {path: 'details/:id', component: FurnitureDetailsComponent, resolve: {furnitureData: SingleFurnitureResolver}},
      {path: 'user', component: FurnitureUserComponent},
    ]),
  ],
  declarations: [
    FurnitureAllComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
    FurnitureEditComponent,
    FurnitureCardComponent,
    FurnitureFormComponent,
  ],
  providers: [
    FurnitureService,
  ]
})

export class FurnitureModule {
}
