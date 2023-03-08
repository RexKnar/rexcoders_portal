import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMentorsComponent } from './components/add-mentors/add-mentors.component';
import { MentorDetailsComponent } from './components/mentor-details/mentor-details.component';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';

const routes: Routes = [
  {
    path:'add',
    component:AddMentorsComponent
   },
   {
    path:'mentor-list',
    component:MentorListComponent
   },
   {
    path:'mentor-details',
    component:MentorDetailsComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }
