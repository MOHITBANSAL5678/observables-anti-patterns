import { Component, OnInit } from '@angular/core';
import { TwoCallsService } from './two-calls.service';

@Component({
  selector: 'app-two-calls',
  templateUrl: './two-calls.component.html',
  styleUrls: ['./two-calls.component.css']
})
export class TwoCallsComponent implements OnInit {
  text: String;
  constructor(private twoCallsService: TwoCallsService) {
  }

  ngOnInit() {
  }

  run2() {
    this.twoCallsService.updateSubject();
    this.twoCallsService.$subjectEvent.subscribe(res => {
      this.text = res;
    });
    this.twoCallsService.$subjectEvent.subscribe(res => {
      this.text = res;
    });
  }

  run1() {
    this.getChild1();
    this.getChild2();
  }

  getChild1() {
    this.twoCallsService.get().subscribe(res => {
      this.text = 'two calls';
    });
  }

  getChild2() {
    this.twoCallsService.get().subscribe(res => {
      this.text = 'two calls';
    });
  }


}
