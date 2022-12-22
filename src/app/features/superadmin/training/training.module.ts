import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddSyllabusComponent } from './components/add-training/add-syllabus/add-syllabus.component';
import { ViewSyllabusComponent } from './components/training-details/view-syllabus/view-syllabus.component';
import { AddModuleComponent } from './components/syllabus/add-module/add-module.component';
import { ModuleListComponent } from './components/syllabus/module-list/module-list.component';
import { ChapterListComponent } from './components/syllabus/chapter-list/chapter-list.component';
import { AddChapterComponent } from './components/syllabus/add-chapter/add-chapter.component';

import { TopicListComponent } from './components/syllabus/topic-list/topic-list.component';

import { ReviewComponent } from './components/review/review.component';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewTopicComponent } from './components/syllabus/view-topic/view-topic.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddTrainingComponent,
    TrainingListComponent,
    TrainingDetailsComponent,
    AddSyllabusComponent,
    ViewSyllabusComponent,
    AddModuleComponent,
    ModuleListComponent,
    ChapterListComponent,
    AddChapterComponent,

    TopicListComponent,
    ViewTopicComponent,

    ReviewComponent,


  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule

  ],
})
export class TrainingModule { }
