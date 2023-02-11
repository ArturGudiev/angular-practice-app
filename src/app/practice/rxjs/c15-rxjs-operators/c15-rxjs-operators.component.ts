import {Component, OnInit} from '@angular/core';
import {C15Service} from "./c15.service";
import {combineLatest, forkJoin, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-c15-rxjs-operators',
  templateUrl: './c15-rxjs-operators.component.html',
  styleUrls: ['./c15-rxjs-operators.component.sass']
})
export class C15RxjsOperatorsComponent implements OnInit {
  array$: Observable<any[]> = of([]);


  o3_every_second: Observable<number> = this.c15Service.o3_every_second;
  o3_every_2_seconds: Observable<number> = this.c15Service.o3_every_2_seconds;

  constructor(public c15Service: C15Service) {
  }

  ngOnInit(): void {
    // 1 map array
    // this.array$ = this.c15Service.getObservableArray();

    // 2 get latest from any o2** observables once anyone emits
    // const o21_every_second$: Observable<number> = this.c15Service.o2_every_second;
    // const o22_every_3_seconds: Observable<number> = this.c15Service.o2_every_3_seconds;

    // this.o3_every_second.subscribe(val => console.log('o3_every_second', val));
    // this.o3_every_2_seconds.subscribe(val => console.log('o3_every_2_seconds', val));


    // 3

    // 4

    // 5
    // interval(1000)
    //   .subscribe(val => console.log('interval', val))
  }

}
