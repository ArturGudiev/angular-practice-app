import { Component, OnInit } from '@angular/core';
import {C8LoggerService} from "./c8-logger.service";

@Component({
  selector: 'app-c8-providers',
  templateUrl: './c8-providers.component.html',
  styleUrls: ['./c8-providers.component.sass']
})
export class C8ProvidersComponent implements OnInit {

  constructor(public c8LoggerService: C8LoggerService) { }

  ngOnInit(): void {
    this.c8LoggerService.log("Message 1")
    this.c8LoggerService.error("Error 1")
  }

}
