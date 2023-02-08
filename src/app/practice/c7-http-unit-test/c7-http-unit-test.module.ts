import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C7HttpUnitTestRoutingModule } from './c7-http-unit-test-routing.module';
import { C7HttpUnitTestComponent } from './c7-http-unit-test.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    C7HttpUnitTestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    C7HttpUnitTestRoutingModule
  ]
})
export class C7HttpUnitTestModule {

}
