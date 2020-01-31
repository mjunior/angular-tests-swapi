import { Component } from '@angular/core';

@Component({
  selector: 'app-peoples-list',
  template: `<ul id="people-list">
              <li *ngFor="let item of peoples"> {{item.name}} </li>
            </ul>`,
  styleUrls: ['./peoples-list.component.scss']
})
export class PeoplesListComponent {

  peoples = [
    { name: 'Luke Skywalker' },
    { name: 'Darth Vader' },
    { name: 'Leia Organa' }
  ];

  constructor() { }

}
