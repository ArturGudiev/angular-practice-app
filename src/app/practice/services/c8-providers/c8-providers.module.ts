import {Injectable, InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {C8ProvidersRoutingModule} from './c8-providers-routing.module';
import {C8ProvidersComponent} from './c8-providers.component';
import {C8LoggerService} from "./c8-logger.service";
import {C8PlainLoggerService} from "./c8-plain-logger.service";
import {LoggerInterface} from "./logger.interface";
import {C8DataService} from "./c8-data.service";

@Injectable()
export class ForInjection {
  a = 5;
}


export function myFactory(logger: LoggerInterface) {

}

@NgModule({
  declarations: [
    C8ProvidersComponent
  ],
  imports: [
    CommonModule,
    C8ProvidersRoutingModule
  ],
  providers: [
  ]
})
export class C8ProvidersModule {
}
