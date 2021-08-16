import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.component.html',
  styleUrls: ['./tabs2.component.css']
})
export class Tabs2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('%cTabs2.component.init', 'background-color:black;color:lightgreen');
  }
  ngOnDestroy() {
    console.log('%cTabs1.component.destroy', 'background-color:red;color:white');
  }
}
