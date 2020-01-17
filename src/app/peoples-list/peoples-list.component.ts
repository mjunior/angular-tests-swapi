import { Component, OnInit } from '@angular/core';
import { PeoplesListService } from './peoples-list.service';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.scss']
})
export class PeoplesListComponent implements OnInit {

  peoples = [];
  constructor(private peopleService: PeoplesListService) { }

  ngOnInit() {
    this.peopleService.getPeoples().subscribe((data) => {
      this.peoples = data.results;
    });
  }

}
