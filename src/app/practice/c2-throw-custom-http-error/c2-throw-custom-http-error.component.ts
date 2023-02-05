import { Component, OnInit } from '@angular/core';
import {C2ServiceService} from "./c2-service.service";
import {BookInterface, BookTrackerError} from "./interfaces";

@Component({
  selector: 'app-c2-throw-custom-http-error',
  templateUrl: './c2-throw-custom-http-error.component.html',
  styleUrls: ['./c2-throw-custom-http-error.component.sass']
})
export class C2ThrowCustomHttpErrorComponent implements OnInit {
  private books!: BookInterface[];

  constructor(public c2Service: C2ServiceService) { }

  ngOnInit(): void {
    this.c2Service.getBooks().subscribe(
      {
        next: books => this.books = <BookInterface[]>books,
        error: (err: BookTrackerError) => console.log('AAA', err)
      }
    );
  }

}
