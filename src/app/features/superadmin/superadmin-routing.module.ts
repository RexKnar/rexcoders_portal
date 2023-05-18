import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'training',
    loadChildren:() => import('./training/training.module').then(module=>module.TrainingModule)
  },
  {
    path:'',
    redirectTo:'settings',
    pathMatch:'full'
  },
  {
    path:'settings',
    loadChildren:() => import('./settings/settings.module').then(module=>module.SettingsModule)
  },
  {
    path:'mentors',
    loadChildren:() => import('./mentor/mentor.module').then(module=>module.MentorModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
