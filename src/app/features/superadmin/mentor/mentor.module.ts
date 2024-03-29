import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { FormsModule } from '@angular/forms';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MentorDetailsComponent,
    MentorListComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class MentorModule { }
