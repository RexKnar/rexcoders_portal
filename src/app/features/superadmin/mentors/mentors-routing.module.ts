import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMentorsComponent } from './components/add-mentors/add-mentors.component';

const routes: Routes = [
  {
    path:'add',
    component:AddMentorsComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }
