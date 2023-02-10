import { Component, OnInit } from '@angular/core';
import {catchError, EMPTY, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-c14-handling-errors',
  templateUrl: './c14-handling-errors.component.html',
  styleUrls: ['./c14-handling-errors.component.sass']
})
export class C14HandlingErrorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.t1_throw_error_using_js_throw_statement().
    //   subscribe({
    //   next: value => console.log('next notification', value),
    //   error: value => console.log('error notification', value),
    // })
  }

  t1_throw_error_using_js_throw_statement(): Observable<any>{
    return EMPTY;
  }




}
