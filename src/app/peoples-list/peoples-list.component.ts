import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.scss']
})
export class PeoplesListComponent implements OnInit {

  peoples = [
    {
      'name': 'Luke Skywalker',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair'
    },{
      'name': '2 Luke Skywalker',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair'
    },{
      'name': '3 Luke Skywalker',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair'
    },
  ];
  constructor() { }

  ngOnInit() {}

}
