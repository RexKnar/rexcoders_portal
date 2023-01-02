import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    path:'list',
    component:StudentCourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCourseRoutingModule { }
