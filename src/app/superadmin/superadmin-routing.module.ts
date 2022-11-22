import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'training',
    loadChildren:() => import('./training/training.module').then(module=>module.TrainingModule)
  },
  {
    path:'',
    redirectTo:'domain',
    pathMatch:'full'
  },
  {
    path:'domain',
    loadChildren:() => import('./settings/settings.module').then(module=>module.SettingsModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
