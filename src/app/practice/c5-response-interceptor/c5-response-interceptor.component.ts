import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-c5-response-interceptor',
  templateUrl: './c5-response-interceptor.component.html'
})
export class C5ResponseInterceptorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3030').subscribe(data => console.log('BBB', data));
  }

}
