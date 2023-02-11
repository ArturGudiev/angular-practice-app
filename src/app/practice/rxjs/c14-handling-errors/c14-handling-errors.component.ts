import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {C14Service} from "./c14.service";

@Component({
  selector: 'app-c14-handling-errors',
  templateUrl: './c14-handling-errors.component.html',
  styleUrls: ['./c14-handling-errors.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C14HandlingErrorsComponent implements OnInit {
  val = 0;
  myObservable$ = this.c14Service.myObservable$;

  constructor(private http: HttpClient, public c14Service: C14Service) { }

  ngOnInit(): void {

    // this.t1_throw_error_using_js_throw_statement().
    //   subscribe({
    //   next: value => console.log('next notification', value),
    //   error: value => console.log('error notification', value),
    // })
    // this.t2_return_empty_on_error().subscribe({
    //   next: val => console.log('Next notification', val),
    //   error: err => console.error('Error notification', err),
    //   complete: () => console.log('Complete notification')
    //  });

    // 3 is not working with OnPush --- fix it
    // this.c14Service.myObservable$.subscribe(val => this.val = val)

  }

  t1_throw_error_using_js_throw_statement(): Observable<any>{
    throw new Error('My error')
  }

  private t2_return_empty_on_error(): Observable<any> {
    return EMPTY;
  }

}
