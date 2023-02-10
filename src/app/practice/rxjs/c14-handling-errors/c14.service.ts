import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class C14Service {
  myObservable$: Observable<any> = new Observable<any>((subscriber) => {
    let i = 0;
    setInterval(() => subscriber.next(i++), 1000);
    setTimeout(() => subscriber.complete(), 1000000);
  });
  constructor() { }
}
