import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { TrainingCardComponent } from 'src/app/shared/components/training-card/training-card.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    //TrainingCardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
]
})
export class AuthModule { }
