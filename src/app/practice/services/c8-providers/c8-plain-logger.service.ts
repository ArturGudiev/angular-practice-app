import { Injectable } from '@angular/core';
import {LoggerInterface} from "./logger.interface";

@Injectable()
export class C8PlainLoggerService implements LoggerInterface {

  constructor() { }

  error(message: string): void {
    console.error('Plain Logger Service error:', message);
  }

  log(message: string): void {
    console.log('Plain Logger Service Log:', message);
  }
}
