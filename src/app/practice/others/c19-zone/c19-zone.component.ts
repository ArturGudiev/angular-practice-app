import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-c19-zone',
  templateUrl: './c19-zone.component.html',
  styleUrls: ['./c19-zone.component.sass']
})
export class C19ZoneComponent implements OnInit {
  val = 0;
  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.t1_create_zone();
  }

  t1_create_zone(){


    // console.log(myFirstZone.name); // моя первая зона
    // console.log(myFirstZone.parent === Zone.current); // true

  }

}
