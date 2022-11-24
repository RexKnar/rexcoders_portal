import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
<<<<<<< HEAD
import { TopicListComponent } from './components/syllabus/topic-list/topic-list.component';
=======
import { ChapterListComponent } from './components/syllabus/chapter-list/chapter-list.component';
>>>>>>> 016c9866b61a6acefd39634b108d5e65ab8f6465
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
<<<<<<< HEAD
  path:'topiclist',
  component:TopicListComponent
=======
  path:'chapter-list',
  component:ChapterListComponent
>>>>>>> 016c9866b61a6acefd39634b108d5e65ab8f6465
 }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
