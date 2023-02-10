import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C15RxjsOperatorsRoutingModule } from './c15-rxjs-operators-routing.module';
import { C15RxjsOperatorsComponent } from './c15-rxjs-operators.component';


@NgModule({
  declarations: [
    C15RxjsOperatorsComponent
  ],
  imports: [
    CommonModule,
    C15RxjsOperatorsRoutingModule
  ]
})
export class C15RxjsOperatorsModule { }
