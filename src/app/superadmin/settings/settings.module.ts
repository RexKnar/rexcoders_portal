import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { AddDomainComponent } from './domain/components/add-domain/add-domain.component';
import { EditDomainComponent } from './domain/components/edit-domain/edit-domain.component';
import { DomainListComponent } from './domain/components/domain-list/domain-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddDomainComponent,
    EditDomainComponent,
    DomainListComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
