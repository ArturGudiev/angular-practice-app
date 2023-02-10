import {Component, OnInit} from '@angular/core';
import {C15Service} from "./c15.service";
import {Observable, of} from "rxjs";

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
    this.array$ = this.c15Service.getObservableArray();


  }

}
