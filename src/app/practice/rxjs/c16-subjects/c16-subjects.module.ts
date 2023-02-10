import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C16SubjectsRoutingModule } from './c16-subjects-routing.module';
import { C16SubjectsComponent } from './c16-subjects.component';


@NgModule({
  declarations: [
    C16SubjectsComponent
  ],
  imports: [
    CommonModule,
    C16SubjectsRoutingModule
  ]
})
export class C16SubjectsModule { }
