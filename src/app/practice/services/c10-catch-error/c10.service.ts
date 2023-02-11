import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class C10Service {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // return this.http.get('http://localhost:3030').pipe(
    //
    // );
    return of([{x: 1, y: 2}, {x: 3, y: 4}])
  }
}
