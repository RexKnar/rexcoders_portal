import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCardComponent } from 'src/app/shared/components/course-card/course-card.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:CourseCardComponent
  },
  {
    path:'forgot',
    component:ForgotPasswordComponent
  },
  {
    path:'card',component:CourseCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
