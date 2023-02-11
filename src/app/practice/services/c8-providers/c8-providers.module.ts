import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C8ProvidersRoutingModule } from './c8-providers-routing.module';
import { C8ProvidersComponent } from './c8-providers.component';


@NgModule({
  declarations: [
    C8ProvidersComponent
  ],
  imports: [
    CommonModule,
    C8ProvidersRoutingModule
  ],
  providers: []
})
export class C8ProvidersModule { }
