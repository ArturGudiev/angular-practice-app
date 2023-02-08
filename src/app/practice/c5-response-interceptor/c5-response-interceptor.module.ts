import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {C5ResponseInterceptorRoutingModule} from './c5-response-interceptor-routing.module';
import {C5ResponseInterceptorComponent} from './c5-response-interceptor.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    C5ResponseInterceptorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    C5ResponseInterceptorRoutingModule
  ],
  providers: [
  ]
})
export class C5ResponseInterceptorModule { }
