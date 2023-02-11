import {Component, ElementRef, OnInit, ViewChild, ViewRef} from '@angular/core';
import {concatMap, fromEvent, interval, mergeMap, Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-c18-higher-order',
  templateUrl: './c18-higher-order.component.html',
  styleUrls: ['./c18-higher-order.component.sass']
})
export class C18HigherOrderComponent implements OnInit {
  @ViewChild('par') par!: ElementRef<any>;
  createObservable =
    (timeout: number, val: number, identifier: string) => new Observable((subscriber) => {
      setTimeout(() => {
        console.log(identifier, 'next')
        subscriber.next(val);
        console.log(identifier, 'complete')
        subscriber.complete();
      }, timeout);
    })

  intervalObservable = interval(1000);

  constructor() {
  }

  ngOnInit(): void {
    // this.t_first();
    // this.t_second();
    this.t_third();
  }

  private t_second() {
    // of(1,2,3).pipe(
    //   ****(i => this.createObservable(1000-100*i, i, `obs${i}`))
    // ).subscribe(val => console.log('Outer observable', val))


  }

  private t_third() {
    // of(1,2,3).pipe(
    //   switchMap(i => this.createObservable(1000, i, `obs${i}`))
    // ).subscribe(val => console.log('Outer observable', val))

  }
}
