import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {delay, from, fromEvent, interval, Observable, of, take} from "rxjs";


@Component({
  selector: 'app-c13-observable',
  templateUrl: './c13-observable.component.html',
  styleUrls: ['./c13-observable.component.sass']
})
export class C13ObservableComponent implements OnInit, AfterViewInit {
  @ViewChild('para') par!: ElementRef;
  dataWithDelay$: Observable<number[]> = of([]);
  constructor() { }

  ngOnInit(): void {
    this.dataWithDelay$ = this.getDataWithDelay();
    // 1

    // 2  --- 1, 2 and [1,2]


  }

  ngAfterViewInit(): void {
    // 3 from event

    // 4 first 2 and check completion
  }

  getDataWithDelay(): Observable<number[]> {
    return of([1, 2, 3]).pipe(
      delay(2000)
    );
  }

}
