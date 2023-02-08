import { Component, OnInit } from '@angular/core';
import {C3Service} from "../c3-resolver/c3.service";
import {C7Service} from "./c7.service";

@Component({
  selector: 'app-c7-http-unit-test',
  templateUrl: './c7-http-unit-test.component.html',
  styleUrls: ['./c7-http-unit-test.component.sass']
})
export class C7HttpUnitTestComponent implements OnInit {

  constructor(private c7Service: C7Service) { }

  ngOnInit(): void {
    this.c7Service.getBooks().subscribe(data => console.table(data));
    this.c7Service.getBook(1).subscribe(data => console.log(data));
  }

}
