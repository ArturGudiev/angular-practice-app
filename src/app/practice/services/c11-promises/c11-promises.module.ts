import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C11PromisesRoutingModule } from './c11-promises-routing.module';
import { C11PromisesComponent } from './c11-promises.component';


@NgModule({
  declarations: [
    C11PromisesComponent
  ],
  imports: [
    CommonModule,
    C11PromisesRoutingModule
  ]
})
export class C11PromisesModule { }
