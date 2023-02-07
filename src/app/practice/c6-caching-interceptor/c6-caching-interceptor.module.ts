import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {C6CachingInterceptorRoutingModule} from './c6-caching-interceptor-routing.module';
import {C6CachingInterceptorComponent} from './c6-caching-interceptor.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    C6CachingInterceptorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    C6CachingInterceptorRoutingModule,
    FormsModule
  ]
})
export class C6CachingInterceptorModule { }
