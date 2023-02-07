import { Component, OnInit } from '@angular/core';
import {C2ServiceService} from "./c2-service.service";
import {C2BookInterface, C2BookTrackerError} from "./interfaces";

@Component({
  selector: 'app-c2-throw-custom-http-error',
  templateUrl: './c2-throw-custom-http-error.component.html',
  styleUrls: ['./c2-throw-custom-http-error.component.sass']
})
export class C2ThrowCustomHttpErrorComponent implements OnInit {
  private books!: C2BookInterface[];

  constructor(public c2Service: C2ServiceService) { }

  ngOnInit(): void {
    this.c2Service.getBooks().subscribe(
      {
        next: books => this.books = <C2BookInterface[]>books,
        error: (err: C2BookTrackerError) => console.log('AAA', err)
      }
    );
  }

}
