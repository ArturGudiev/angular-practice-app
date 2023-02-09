import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c12-error-handler',
  templateUrl: './c12-error-handler.component.html',
  styleUrls: ['./c12-error-handler.component.sass']
})
export class C12ErrorHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('AAAAAA');
  }

}
