import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth.component';




<<<<<<< HEAD
=======


>>>>>>> 016c9866b61a6acefd39634b108d5e65ab8f6465
@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    
    
  ],
=======
>>>>>>> 016c9866b61a6acefd39634b108d5e65ab8f6465


]
})
export class AuthModule { }
