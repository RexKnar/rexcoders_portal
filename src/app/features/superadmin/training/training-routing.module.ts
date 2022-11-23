import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
<<<<<<< HEAD
import { ModuleListComponent } from './components/syllabus/module-list/module-list.component';
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
  path:'module-list',
  component:ModuleListComponent
 },
 {
  path:'chapter-list',
  component:ChapterListComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
