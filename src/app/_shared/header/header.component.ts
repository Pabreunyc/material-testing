import { Component, OnInit } from '@angular/core';
import * as mainMenu from '../../../assets/menu.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mainMenu;

  constructor() {    
    this.mainMenu = (mainMenu as any).default;
    console.log('constructor', this.mainMenu);
  }

  ngOnInit() {
    console.log('%cHeaderComponent.init', 'background-color:black;color:lightgreen');
  }

}
