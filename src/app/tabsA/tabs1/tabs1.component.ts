import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.component.html',
  styleUrls: ['./tabs1.component.css']
})
export class Tabs1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('%cTabs1.component.init', 'background-color:black;color:lightgreen');
  }
  ngOnDestroy() {
    console.log('%cTabs1.component.destroy', 'background-color:red;color:white');
  }
}
