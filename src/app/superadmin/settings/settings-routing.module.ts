import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainListComponent } from './domain/components/domain-list/domain-list.component';
const routes: Routes = [
  {
    path:'domain-list',
    component:DomainListComponent
   },
   {
    path:'',
    redirectTo:'domain-list',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
