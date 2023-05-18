import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { DomainListComponent } from './domain-list/domain-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/subcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    DomainListComponent,
    StateComponent,
    CityComponent,
    CategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SettingsModule { }
