import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";


@Component({
  selector: 'app-c13-observable',
  templateUrl: './c13-observable.component.html',
  styleUrls: ['./c13-observable.component.sass']
})
export class C13ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // myObservable$.subscribe(val => console.log(val));
    // myObservable$.subscribe(val => console.log('2', val));
  }

}
