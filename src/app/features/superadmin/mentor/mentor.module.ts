import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMentorsComponent } from './add-mentors/add-mentors.component';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    MentorDetailsComponent,
    MentorListComponent,
    AddMentorsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ]
})
export class MentorModule { }
