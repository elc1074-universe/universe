import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material-module/app-material-module.module';
import { UserComponent } from './user.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    UserComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule
  ]
})
export class UserModule { }
