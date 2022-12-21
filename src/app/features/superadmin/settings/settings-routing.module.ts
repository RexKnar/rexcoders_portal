import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CityComponent } from './city/city.component';
import { DomainListComponent } from './domain/components/domain-list/domain-list.component';
import { StateComponent } from './state/state.component';
import { SubCategoryComponent } from './sub-category/subcategory.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'category-list',
    pathMatch: 'full'
  },
  {
    path: 'domain-list',
    component: DomainListComponent
  },
  {
    path:'category-list',
    component: CategoryComponent
  },
  {
    path:'city-list',
    component: CityComponent
  },
  {
    path:'state-list',
    component: StateComponent
  },
  {
    path:'subcategory-list',
    component: SubCategoryComponent
  },
  {
    path:'state-list:countryId',
    component:StateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
