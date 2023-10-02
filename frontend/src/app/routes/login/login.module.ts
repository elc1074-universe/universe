import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AppMaterialModule } from 'src/app/shared/app-material-module/app-material-module.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule ,ToastrService } from 'ngx-toastr';
import { UserComponent } from '../user/user.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    FormsModule,
    ToastrModule.forRoot(),
  ], 
  providers: [
    ToastrService
  ]
})
export class LoginModule { }
