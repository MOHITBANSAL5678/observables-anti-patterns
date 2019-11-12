import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-latest-filter',
  templateUrl: './latest-filter.component.html',
  styleUrls: ['./latest-filter.component.css']
})
export class LatestFilterComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  checkValue() {
    this.filterService.switchMapConnector.subscribe();
  }
}
