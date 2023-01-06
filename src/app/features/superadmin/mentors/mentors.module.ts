import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MentorsRoutingModule } from './mentors-routing.module';
import { AddMentorsComponent } from './components/add-mentors/add-mentors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddMentorsComponent
  ],
  imports: [
    CommonModule,
    MentorsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ]
})
export class MentorsModule { }
