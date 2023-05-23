import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentCourseListComponent
  ],
  imports: [
    CommonModule,
    StudentCourseRoutingModule,
    SharedModule,
    FormsModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StudentCourseModule { }
