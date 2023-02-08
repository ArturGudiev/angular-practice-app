import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C10CatchErrorRoutingModule } from './c10-catch-error-routing.module';
import { C10CatchErrorComponent } from './c10-catch-error.component';


@NgModule({
  declarations: [
    C10CatchErrorComponent
  ],
  imports: [
    CommonModule,
    C10CatchErrorRoutingModule
  ]
})
export class C10CatchErrorModule { }
