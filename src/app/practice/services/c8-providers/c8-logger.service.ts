import { Injectable } from '@angular/core';
import {LoggerInterface} from "./logger.interface";

@Injectable()
export class C8LoggerService implements LoggerInterface{

  constructor() { }

  error(message: string): void {
    console.error('Logger Service error:', message);
  }

  log(message: string): void {
    console.log('Logger Service Log:', message);
  }
}
