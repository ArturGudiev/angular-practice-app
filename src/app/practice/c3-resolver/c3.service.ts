import { Injectable } from '@angular/core';
import {catchError, delay, Observable, of, throwError} from "rxjs";
import {C3_BOOKS, C3BookInterface, C3BookTrackerError} from "./interfaces_and_constants";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {C2_BOOKS} from "../c2-throw-custom-http-error/c2-books.constant";

@Injectable({
  providedIn: 'root'
})
export class C3Service {

  constructor(private http: HttpClient) { }


  getBooks(): Observable<C3BookInterface[]>{
    return of(C3_BOOKS).pipe(delay(2000));
  }


  getBooksError(): Observable<C3BookInterface[] | C3BookTrackerError>{
    return this.http.get<C3BookInterface[]>('http://googl23').pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<C3BookTrackerError> {
    let dataError = new C3BookTrackerError(100, error.statusText, 'An error occurred retrieving data.');
    return throwError(() => dataError);
  }
}
