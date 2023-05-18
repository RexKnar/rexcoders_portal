import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';




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
        SharedModule,
        MatProgressBarModule
    ]
})
export class AuthModule { }
