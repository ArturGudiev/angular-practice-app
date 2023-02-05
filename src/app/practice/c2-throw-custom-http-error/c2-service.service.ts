import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {C2BookInterface} from "./c2-book.interface";
import {C2_BOOKS} from "./c2-books.constant";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class C2ServiceService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<C2BookInterface[]>{
    return of(C2_BOOKS);
  }

  getBooksError(): Observable<C2BookInterface[]>{
    return this.http.get<C2BookInterface[]>('http://googl23');
  }
}
