import {Component, OnInit} from '@angular/core';
import {C3Service} from "./c3.service";
import {HttpClient} from "@angular/common/http";
import {C3BookInterface, C3BookTrackerError} from "./interfaces_and_constants";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-c3-resolver',
  templateUrl: './c3-resolver.component.html',
  styleUrls: ['./c3-resolver.component.sass']
})
export class C3ResolverComponent implements OnInit {
  errorMessage = ''
  books: C3BookInterface[] = [];

  constructor(public c3Service: C3Service, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.c3Service.getBooksError().subscribe({
      next: (books: C3BookInterface[] | C3BookTrackerError) => this.books = <C3BookInterface[]>books,
      error: (err: C3BookTrackerError) => this.errorMessage = err.friendlyMessage
      }
    )
  }

}
