import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {BookTrackerError, BookInterface} from "./interfaces";
import {C2_BOOKS} from "./c2-books.constant";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class C2ServiceService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookInterface[]>{
    return of(C2_BOOKS);
  }
}
