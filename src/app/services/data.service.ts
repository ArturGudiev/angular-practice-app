import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { books } from '../data/books.constant';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getOneBook(): Observable<any> {
    return of<Book>(books[0])
  }
}
