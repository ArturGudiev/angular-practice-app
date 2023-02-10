import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, merge, Observable, of, scan, startWith, Subject} from "rxjs";

@Component({
  selector: 'app-c16-subjects',
  templateUrl: './c16-subjects.component.html',
  styleUrls: ['./c16-subjects.component.sass']
})
export class C16SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.t1_different_subscriptions();
    // this.t2_subject_multicast();
    // this.t3_late_subscriber();
    // this.t4_initial_value();
    // this.t5_sub_of_elements();
    // this.t6_combine_sources_into_one();
  }

  t1_different_subscriptions() {
    const numbers$ = of(2, 4, 6);

  }

  t2_subject_multicast() {
    const numbers$$ = new Subject<number>();

  }

  t3_late_subscriber() {
    const numbers$$ = new BehaviorSubject<number>(0);
  }

  t4_initial_value() {
    const numbers$$ = of(1, 2, 3);
  }

  private t5_sub_of_elements() {
    const numbers$$ = of(1, 2, 3);
  }

  private t6_combine_sources_into_one() {
    const a$ = new Observable(sub => {
      setInterval(() => sub.next(100), 1000);
    })
    const b$ = new Observable(sub => {
      setInterval(() => sub.next(200), 500);
    })

  }
}
