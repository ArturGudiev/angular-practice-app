import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, delay, Observable, of, throwError} from "rxjs";
import {C7BookInterface, C7BookTrackerError} from "./interfaces_and_constants";

@Injectable({
  providedIn: 'root'
})
export class C7Service {

  constructor(private http: HttpClient) { }


  getBooks(): Observable<C7BookInterface[]>{
    return this.http.get<C7BookInterface[]>('http://localhost:3030/books');
  }

  getBook(id: number): Observable<C7BookInterface> {
    return this.http.get<C7BookInterface>(`http://localhost:3030/book/${id}`);
  }

  getBooksError(): Observable<C7BookInterface[] | C7BookTrackerError>{
    return this.http.get<C7BookInterface[]>('http://googl23').pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<C7BookTrackerError> {
    let dataError = new C7BookTrackerError(
      100,
      error.statusText,
      'An error occurred retrieving data.');
    return throwError(() => dataError);
  }
}
