import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';

import { ReviewComponent } from './components/review/review.component';


import { ModuleListComponent } from './components/syllabus/module-list/module-list.component';
import { ChapterListComponent } from './components/syllabus/chapter-list/chapter-list.component';

import { TrainingListComponent } from './components/training-list/training-list.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';

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
  path:'review',
  component:ReviewComponent
},
 {
  path:'module-list',
  component:ModuleListComponent
 },
 {
  path:'chapter-list',
  component:ChapterListComponent
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
