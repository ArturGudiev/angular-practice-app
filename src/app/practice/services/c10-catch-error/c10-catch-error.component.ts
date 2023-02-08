import { Component, OnInit } from '@angular/core';
import {C10Service} from "./c10.service";

@Component({
  selector: 'app-c10-catch-error',
  templateUrl: './c10-catch-error.component.html',
  styleUrls: ['./c10-catch-error.component.sass']
})
export class C10CatchErrorComponent implements OnInit {

  constructor(private c10Service: C10Service) { }

  ngOnInit(): void {
    this.c10Service.getData().subscribe(data => console.table(data));
  }

}
