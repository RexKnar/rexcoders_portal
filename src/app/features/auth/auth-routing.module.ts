import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainingCardComponent } from 'src/app/shared/components/training-card/training-card.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { AuthComponent } from './auth.component';


const routes: Routes = [
  {
    path:'',
    component: AuthComponent
  },
  {
    path:'forgot',
    component:ForgotPasswordComponent
  },

  {
    path:'card',component:TrainingCardComponent
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
