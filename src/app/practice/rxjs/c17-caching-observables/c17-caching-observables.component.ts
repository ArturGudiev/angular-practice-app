import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReplaySubject, share, shareReplay} from "rxjs";

@Component({
  selector: 'app-c17-caching-observables',
  templateUrl: './c17-caching-observables.component.html',
  styleUrls: ['./c17-caching-observables.component.sass']
})
export class C17CachingObservablesComponent implements OnInit {

  myObs$ = this.http.get('http://localhost:3030/books')
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.t3_the_same1_but_with_share()
  }

  sendBookRequest() {
    this.myObs$.subscribe(val => console.log('AAA', val));
  }


  t3_the_same1_but_with_share(){
    // const myNewObs$ = this.http.get('http://localhost:3030/books');
    // myNewObs$.subscribe(val => console.log('AAAA1', val))
    // myNewObs$.subscribe(val => console.log('AAAA2', val))

  }
}
