import {Component, Input, OnInit} from '@angular/core';
import {C9ServiceService} from "./c9-service.service";

@Component({
  selector: 'app-c9-child',
  templateUrl: './c9-child.component.html',
  styleUrls: ['./c9-child.component.sass'],
  providers: [
    C9ServiceService
  ]
})
export class C9ChildComponent implements OnInit {
  @Input() val: number = 0;

  constructor(public service: C9ServiceService) { }

  ngOnInit(): void {
    this.service.a = this.val;
  }

}
