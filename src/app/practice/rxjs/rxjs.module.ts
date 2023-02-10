import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RxjsRoutingModule} from './rxjs-routing.module';
import {RxjsComponent} from './rxjs.component';
import {C13ObservableComponent} from './c13-observable/c13-observable.component';
import { C14HandlingErrorsComponent } from './c14-handling-errors/c14-handling-errors.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    RxjsComponent,
    C13ObservableComponent,
    C14HandlingErrorsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
