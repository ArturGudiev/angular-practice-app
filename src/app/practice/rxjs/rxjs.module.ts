import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RxjsRoutingModule} from './rxjs-routing.module';
import {RxjsComponent} from './rxjs.component';
import {C13ObservableComponent} from './c13-observable/c13-observable.component';


@NgModule({
  declarations: [
    RxjsComponent,
    C13ObservableComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
