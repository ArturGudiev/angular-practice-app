import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C12ErrorHandlerRoutingModule } from './c12-error-handler-routing.module';
import { C12ErrorHandlerComponent } from './c12-error-handler.component';


@NgModule({
  declarations: [
    C12ErrorHandlerComponent
  ],
  imports: [
    CommonModule,
    C12ErrorHandlerRoutingModule
  ]
})
export class C12ErrorHandlerModule { }
