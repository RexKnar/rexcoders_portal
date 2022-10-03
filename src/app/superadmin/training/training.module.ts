import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AddTrainingComponent,
    TrainingListComponent,
    TrainingDetailsComponent,

  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    CKEditorModule
  ],
})
export class TrainingModule { }
