import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CourseCardComponent } from 'src/app/shared/components/course-card/course-card.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
]
})
export class AuthModule { }
