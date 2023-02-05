import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Book } from '../interfaces/book.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-c1-casting-json-response',
  templateUrl: './c1-casting-json-response.component.html',
  styleUrls: ['./c1-casting-json-response.component.sass']
})
export class C1CastingJsonResponseComponent implements OnInit {
  
  oneBook!: Book;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOneBook().pipe(
      map((b: any) => <Book>{
        author: b.author,
        title: b.title
      })
    )
    .subscribe({
      next: (book: Book) => {
        this.oneBook = book;
        console.log(this.oneBook);
      }
    });

  }

}
