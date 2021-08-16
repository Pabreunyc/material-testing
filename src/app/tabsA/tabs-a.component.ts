import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-a',
  templateUrl: './tabs-a.component.html',
  styleUrls: ['./tabs-a.component.css']
})
export class TabsAComponent implements OnInit {
  public selectedIndex;

  constructor() { }

  ngOnInit() {
    console.log('%cTabsA.component.init', 'background-color:black;color:lightgreen');
  }

  onSelectedIndexChange(e) {
    console.log('%conSelectedIndexChange', 'color:green;', e);
    if(e == 2) {
      console.log('2 hit', Date.now());
      this.selectedIndex = 1;
    }
    //return false;
  }
  onSelectedTabChange(e) {
    let textLabel = e.tab.textLabel.toString();
    console.log('%conSelectedTabChange', 'color:blue;', e, textLabel);    
  }
}
