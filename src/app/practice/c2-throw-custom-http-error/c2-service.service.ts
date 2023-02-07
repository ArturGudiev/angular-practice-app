import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {C2_BOOKS} from "./c2-books.constant";
import {HttpClient} from "@angular/common/http";
import {C2BookInterface} from "./interfaces";


@Injectable({
  providedIn: 'root'
})
export class C2ServiceService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<C2BookInterface[]>{
    return of(C2_BOOKS);
  }
}
