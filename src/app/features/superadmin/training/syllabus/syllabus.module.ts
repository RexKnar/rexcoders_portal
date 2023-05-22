import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { AddModuleComponent } from './components/syllabus/add-module/add-module.component';
import { ChapterListComponent } from './components/syllabus/chapter-list/chapter-list.component';
import { ModuleListComponent } from './components/syllabus/module-list/module-list.component';
import { TopicListComponent } from './components/syllabus/topic-list/topic-list.component';
import { ViewTopicComponent } from './components/syllabus/view-topic/view-topic.component';


@NgModule({
  declarations: [
    AddModuleComponent,
    ChapterListComponent,
    ModuleListComponent,
    TopicListComponent,
    ViewTopicComponent
  ],
  imports: [
    CommonModule,
    SyllabusRoutingModule,


  ]
})
export class SyllabusModule { }
