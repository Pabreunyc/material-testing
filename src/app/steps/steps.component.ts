import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
public data = [];

  constructor() { }

  ngOnInit() {
    this._init();
  }
  // --------------------------------------------------------------------------
  onSelectionChange(evt) {
    console.log('onselectionChange', evt);
  }

  // ==========================================================================
  private _init() {    
    let cities = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];

    let dataObs = of(cities).pipe(
      delay(1000)
    ).subscribe(d => {
      console.log('obs', d);
      this.data = d;
    });

  }
}
