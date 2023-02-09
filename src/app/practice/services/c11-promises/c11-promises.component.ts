import { Component, OnInit } from '@angular/core';
import {C11Service} from "./c11.service";

@Component({
  selector: 'app-c11-promises',
  templateUrl: './c11-promises.component.html',
  styleUrls: ['./c11-promises.component.sass']
})
export class C11PromisesComponent implements OnInit {

  constructor(private c11Service: C11Service) { }

  ngOnInit(): void {
    this.c11Service.getPromise(1).then(
      (data: any) => console.log('then', data)
    )
  }

}
