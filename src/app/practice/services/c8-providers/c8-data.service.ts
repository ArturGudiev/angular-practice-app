import { Injectable } from '@angular/core';
import {C8LoggerService} from "./c8-logger.service";

@Injectable()
export class C8DataService {

  constructor(public loggerService: C8LoggerService) { }

  log(message: string) {
    console.log('Data Service LOG');
    this.loggerService.log(message);
  }

  error(message: string) {
    console.error('Data Service ERROR');
    this.loggerService.error(message);
  }
}
