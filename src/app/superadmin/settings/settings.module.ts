import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { DomainListComponent } from './domain/components/domain-list/domain-list.component';
import { FormsModule} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './subcategory/subcategory.component';


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
    FormsModule
  ]
})
export class SettingsModule { }
