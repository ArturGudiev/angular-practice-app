import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class C10Service {

  constructor() { }

  getData(): Observable<any> {
    return of([{x: 1, y: 2}, {x: 3, y: 4}])
  }
}
