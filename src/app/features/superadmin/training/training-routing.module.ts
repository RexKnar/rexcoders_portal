import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { TrainingListComponent } from './components/training-list/training-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'training-list',
    pathMatch:'full'
  },
 {
  path:'training-list',
  component:TrainingListComponent
 },
 {
  path:'training-list',
  component:AddTrainingComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }