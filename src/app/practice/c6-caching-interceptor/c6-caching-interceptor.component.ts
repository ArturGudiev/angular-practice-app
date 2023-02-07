import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-c6-caching-interceptor',
  templateUrl: './c6-caching-interceptor.component.html',
  styleUrls: ['./c6-caching-interceptor.component.sass']
})
export class C6CachingInterceptorComponent implements OnInit {
  bookId = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.sendBookRequest(this.bookId);
  }

  sendBookRequest(id: number) {
    this.http.get(`http://localhost:3030/book/${this.bookId}`).subscribe(data => console.log(data));
  }

  getAllBooks() {
    this.http.get('http://localhost:3030/books')
      .subscribe(data => console.table(data));
  }

  sendPostRequest() {
    this.http.post('http://localhost:3030/new-book', {}).subscribe(() => {})
  }
}
