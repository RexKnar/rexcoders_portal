import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDomainComponent } from './domain/components/add-domain/add-domain.component';

const routes: Routes = [
  {
    path:'add-domain',
    component:AddDomainComponent
   },
   {
    path:'',
    redirectTo:'add-domain',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
