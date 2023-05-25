import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { ReviewComponent } from './components/review/review.component';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
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
  path:'training-details',
  component:TrainingDetailsComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
