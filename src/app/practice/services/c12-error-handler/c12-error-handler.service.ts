import {ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class C12ErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.log('C12ErrorHandlerService', error)
  }
}
