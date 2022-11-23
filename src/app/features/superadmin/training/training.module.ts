import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddSyllabusComponent } from './components/add-training/add-syllabus/add-syllabus.component';
import { ViewSyllabusComponent } from './components/training-details/view-syllabus/view-syllabus.component';

@NgModule({
  declarations: [
    AddTrainingComponent,
    TrainingListComponent,
    TrainingDetailsComponent,
    AddSyllabusComponent,
    ViewSyllabusComponent,

  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    CKEditorModule
  ],
})
export class TrainingModule { }
