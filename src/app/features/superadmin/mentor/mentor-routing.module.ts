import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { AddMentorsComponent } from './add-mentors/add-mentors.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddMentorsComponent
  },
  {
    path: 'mentor-list',
    component: MentorListComponent
  },
  {
    path: 'mentor-details',
    component: MentorDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
