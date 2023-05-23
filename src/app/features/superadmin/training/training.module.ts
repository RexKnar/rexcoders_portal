import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddSyllabusComponent } from './components/add-training/add-syllabus/add-syllabus.component';
import { ViewSyllabusComponent } from './components/training-details/view-syllabus/view-syllabus.component';
import { ReviewComponent } from './components/review/review.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AddTrainingComponent,
    TrainingListComponent,
    TrainingDetailsComponent,
    AddSyllabusComponent,
    ViewSyllabusComponent,
    ReviewComponent,


  ],
  imports: [
   CommonModule,
    TrainingRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,

  ],
})
export class TrainingModule { }
