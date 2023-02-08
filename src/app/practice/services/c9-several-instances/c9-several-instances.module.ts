import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C9SeveralInstancesRoutingModule } from './c9-several-instances-routing.module';
import { C9SeveralInstancesComponent } from './c9-several-instances.component';
import { C9ChildComponent } from './c9-child/c9-child.component';


@NgModule({
  declarations: [
    C9SeveralInstancesComponent,
    C9ChildComponent
  ],
  imports: [
    CommonModule,
    C9SeveralInstancesRoutingModule
  ]
})
export class C9SeveralInstancesModule { }
