import {Component, OnInit} from '@angular/core';
import {C15Service} from "./c15.service";
import {combineLatest, filter, forkJoin, interval, Observable, of, withLatestFrom} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-c15-rxjs-operators',
  templateUrl: './c15-rxjs-operators.component.html',
  styleUrls: ['./c15-rxjs-operators.component.sass']
})
export class C15RxjsOperatorsComponent implements OnInit {
  array$: Observable<any[]> = of([]);


  constructor(public c15Service: C15Service) {
  }

  ngOnInit(): void {
    // 1 map array
    // this.array$ = this.c15Service.getObservableArray();

    // 2 get latest from any o2** observables once anyone emits
    // const o21_every_second$: Observable<number> = this.c15Service.o2_every_second;
    // const o22_every_3_seconds: Observable<number> = this.c15Service.o2_every_3_seconds;

    // 3
    // const o31_every_second: Observable<number> = this.c15Service.o3_every_second;
    // const o32_every_2_seconds: Observable<number> = this.c15Service.o3_every_2_seconds;

    // 4
    // const o40$ = this.c15Service.o40_main_observable;
    // const o41$ = this.c15Service.o41_every_2_seconds;
    // const o42$ = this.c15Service.o42_every_second;

    // 5
    // interval(1000)
    //   .subscribe(val => console.log('interval', val))
  }

}
