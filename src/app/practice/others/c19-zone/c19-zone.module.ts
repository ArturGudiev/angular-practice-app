import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C19ZoneRoutingModule } from './c19-zone-routing.module';
import { C19ZoneComponent } from './c19-zone.component';


@NgModule({
  declarations: [
    C19ZoneComponent
  ],
  imports: [
    CommonModule,
    C19ZoneRoutingModule
  ]
})
export class C19ZoneModule { }
