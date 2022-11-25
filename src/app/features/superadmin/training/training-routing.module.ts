import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { TopicListComponent } from './components/syllabus/topic-list/topic-list.component';

import { ChapterListComponent } from './components/syllabus/chapter-list/chapter-list.component';
import { TrainingListComponent } from './components/training-list/training-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'training-list',
    pathMatch:'full'
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
 

  path:'topic-list',
  component:TopicListComponent
 },
 {
 
  path:'chapter-list',
  component:ChapterListComponent

 },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
