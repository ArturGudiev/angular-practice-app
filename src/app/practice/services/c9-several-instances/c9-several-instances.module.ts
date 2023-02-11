import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C9SeveralInstancesRoutingModule } from './c9-several-instances-routing.module';
import { C9SeveralInstancesComponent } from './c9-several-instances.component';
import { C9ChildComponent } from './c9-child/c9-child.component';
import {C9ServiceService} from "./c9-child/c9-service.service";


@NgModule({
  declarations: [
    C9SeveralInstancesComponent,
    C9ChildComponent
  ],
  imports: [
    CommonModule,
    C9SeveralInstancesRoutingModule
  ],
  providers: [
    C9ServiceService
  ]
})
export class C9SeveralInstancesModule { }
