import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C17CachingObservablesRoutingModule } from './c17-caching-observables-routing.module';
import { C17CachingObservablesComponent } from './c17-caching-observables.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    C17CachingObservablesComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    C17CachingObservablesRoutingModule
  ]
})
export class C17CachingObservablesModule { }
