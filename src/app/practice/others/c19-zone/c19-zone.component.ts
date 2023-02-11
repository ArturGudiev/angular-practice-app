import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c19-zone',
  templateUrl: './c19-zone.component.html',
  styleUrls: ['./c19-zone.component.sass']
})
export class C19ZoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  t1_create_zone(){
    const myFirstZone = Zone.current.fork({
      name: 'моя первая зона'
    });

    console.log(myFirstZone.name); // моя первая зона

    console.log(myFirstZone.parent === Zone.current); // true

  }

}
