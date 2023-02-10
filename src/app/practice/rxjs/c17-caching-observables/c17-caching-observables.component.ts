import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay} from "rxjs";

@Component({
  selector: 'app-c17-caching-observables',
  templateUrl: './c17-caching-observables.component.html',
  styleUrls: ['./c17-caching-observables.component.sass']
})
export class C17CachingObservablesComponent implements OnInit {

  myObs$ = this.http.get('http://localhost:3030/books')
  constructor(public http: HttpClient) { }

  ngOnInit(): void {

  }

  sendBookRequest() {
    this.myObs$.subscribe(val => console.log('AAA', val));
  }
}
