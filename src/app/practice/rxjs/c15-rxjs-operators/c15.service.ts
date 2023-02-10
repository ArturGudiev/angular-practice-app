import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class C15Service {

  constructor() { }


  getObservableArray(): Observable<any[]> {
    return of([{x: 1, y: 2}, {x: 2, y: 4}])
  }
}
