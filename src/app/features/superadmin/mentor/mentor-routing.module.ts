import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';

import { MentorListComponent } from './mentor-list/mentor-list.component';

const routes: Routes = [
  {
    path: 'mentorList',
    component: MentorListComponent
  },
  {
    path: 'mentorDetails',
    component: MentorDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
