import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C18HigherOrderRoutingModule } from './c18-higher-order-routing.module';
import { C18HigherOrderComponent } from './c18-higher-order.component';


@NgModule({
  declarations: [
    C18HigherOrderComponent
  ],
  imports: [
    CommonModule,
    C18HigherOrderRoutingModule
  ]
})
export class C18HigherOrderModule { }
