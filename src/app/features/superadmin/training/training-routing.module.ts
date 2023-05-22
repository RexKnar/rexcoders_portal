import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { ReviewComponent } from './components/review/review.component';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { ViewTopicComponent } from './syllabus/components/syllabus/view-topic/view-topic.component';
import { ModuleListComponent } from './syllabus/components/syllabus/module-list/module-list.component';
import { ChapterListComponent } from './syllabus/components/syllabus/chapter-list/chapter-list.component';
import { TopicListComponent } from './syllabus/components/syllabus/topic-list/topic-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'training-list',
    pathMatch: 'full'
  },
 {
  path:'list',
  component:TrainingListComponent
 },
 {
  path:'add',
  component:AddTrainingComponent
 },

{
  path:'review',
  component:ReviewComponent
},
 {
  path:'module-list',
  component:ModuleListComponent
 },
 {

  path:'topic-list',
  component:TopicListComponent
 },
 {
 
  path:'chapter-list',
  component:ChapterListComponent
 },
 {
  path:'module-list',
  component:ModuleListComponent

 },
 {
  path:'view-topic',
  component:ViewTopicComponent
 },
 {
  path:'training-list',
  component:TrainingDetailsComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
