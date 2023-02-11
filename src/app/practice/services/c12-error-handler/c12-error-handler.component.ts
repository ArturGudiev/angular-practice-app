import { Component, OnInit } from '@angular/core';
import {of, Subscriber} from "rxjs";

@Component({
  selector: 'app-c12-error-handler',
  templateUrl: './c12-error-handler.component.html',
  styleUrls: ['./c12-error-handler.component.sass']
})
export class C12ErrorHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Some error inside to invoke global error handler');
  }

}
