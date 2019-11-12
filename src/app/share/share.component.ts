import { Component, OnInit } from '@angular/core';
import { ShareService } from './share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  text:string;
  constructor(private shareService:ShareService) { }

  ngOnInit() {
  }

  run1() {
    this.getChild1();
    this.getChild2();
  }

  getChild1() {
    this.shareService.shareConnector$.subscribe(res => {
      this.text = 'single call';
    });
  }

  getChild2() {
    this.shareService.shareConnector$.subscribe(res => {
      this.text = 'single call';
    });
  }

}
