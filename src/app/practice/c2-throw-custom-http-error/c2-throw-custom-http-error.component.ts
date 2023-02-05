import { Component, OnInit } from '@angular/core';
import {C2ServiceService} from "./c2-service.service";
import {C2BookInterface} from "./c2-book.interface";

@Component({
  selector: 'app-c2-throw-custom-http-error',
  templateUrl: './c2-throw-custom-http-error.component.html',
  styleUrls: ['./c2-throw-custom-http-error.component.sass']
})
export class C2ThrowCustomHttpErrorComponent implements OnInit {
  private books!: C2BookInterface[];

  constructor(public c2Service: C2ServiceService) { }

  ngOnInit(): void {
    this.c2Service.getBooksError().subscribe(books => {
      this.books = books;
      console.log(this.books);
    });
  }

}
