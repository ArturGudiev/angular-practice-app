import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-c4-request-interceptor',
  templateUrl: './c4-request-interceptor.component.html',
  styleUrls: ['./request-interceptor.component.sass']
})
export class C4RequestInterceptorComponent implements OnInit {
  data = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3030').subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}
