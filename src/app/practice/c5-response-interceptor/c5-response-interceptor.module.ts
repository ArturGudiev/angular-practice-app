import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C5ResponseInterceptorRoutingModule } from './c5-response-interceptor-routing.module';
import { C5ResponseInterceptorComponent } from './c5-response-interceptor.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {C5Interceptor} from "./c5.interceptor";


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
    {provide: HTTP_INTERCEPTORS, useClass: C5Interceptor, multi: true}
  ]
})
export class C5ResponseInterceptorModule { }
