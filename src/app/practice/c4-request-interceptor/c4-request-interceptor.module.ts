import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C4RequestInterceptorRoutingModule } from './c4-request-interceptor-routing.module';
import {C4RequestInterceptorComponent} from "./c4-request-interceptor.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    C4RequestInterceptorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    C4RequestInterceptorRoutingModule
  ]
})
export class C4RequestInterceptorModule { }
