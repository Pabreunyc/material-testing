import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import * as mainMenu from '../assets/main_menu.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-testing';

  constructor() {
    console.log('%cApp.Component.constructor', 'background-color:green;color:white;font-size:bold');
    console.log('Version', VERSION);
  }
}
