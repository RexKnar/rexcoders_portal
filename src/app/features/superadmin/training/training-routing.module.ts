import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
 
import { ChapterListComponent } from './components/syllabus/chapter-list/chapter-list.component';
import { ModuleListComponent } from './components/syllabus/module-list/module-list.component';
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
  path:'chapter-list',
  component:ChapterListComponent
 },
 {
  path:'module-list',
  component:ModuleListComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
