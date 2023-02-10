import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class C15Service {

  o2_every_second: Observable<number> = new Observable((subscriber) => {
    let i = 0;
    setInterval(() => {
      i++;
      console.debug('o2_every_second', i);
      subscriber.next(i)
    }, 1000);
    setTimeout(() => subscriber.complete(), 15000)
  })

  o2_every_3_seconds: Observable<number> = new Observable((subscriber) => {
    let i = 0;
    setInterval(() => {
      i++;
      console.debug('o2_every_3_seconds', i);
      subscriber.next(i)
    }, 3000);
  })

  o3_every_second: Observable<number> = new Observable((subscriber) => {
    let i = 0;
    setInterval(() => {
      i++;
      // console.debug('o3_every_second', i);
      subscriber.next(i)
    }, 1000);
    setTimeout(() => subscriber.complete(), 5000)
  })
  o3_every_2_seconds: Observable<number> = new Observable((subscriber) => {
    let i = 1;
    setInterval(() => {
      i *= 2;
      // console.debug('o3_every_2_seconds', i);
      subscriber.next(i)
    }, 2000);
    setTimeout(() => subscriber.complete(), 5000)

  })

  o40_main_observable: Observable<number> = new Observable((subscriber) => {
    let i = 0;
    setInterval(() => {
      i += 10;
      // console.debug('o3_every_second', i);
      subscriber.next(i)
    }, 3000);
  })
  o41_every_2_seconds: Observable<number> = new Observable((subscriber) => {
    let i = 0;
    setInterval(() => {
      i += 20;
      // console.debug('o3_every_2_seconds', i);
      subscriber.next(i)
    }, 2000);
  })

  o42_every_second: Observable<number> = new Observable((subscriber) => {
    let i = 0;
    setInterval(() => {
      i += 30;
      // console.debug('o3_every_2_seconds', i);
      subscriber.next(i)
    }, 1000);
  });


    constructor() { }


  getObservableArray(): Observable<any[]> {
    return of([{x: 1, y: 2}, {x: 2, y: 4}])
  }
}
