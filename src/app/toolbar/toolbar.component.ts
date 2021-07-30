import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTooltip } from '@angular/material';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
public ticketFG: FormGroup;
public ticketSelects:any = {};
public assignUserTo:any = {};
public tc:ThemePalette = null;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    console.log('%cToolbarComponent', 'background:black;color:lightgreen');
    console.log(this.tc);
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cToolbarComponent', 'background:red;color:white');
  }

  set XXX(val) {
    this.ticketFG.get('fc_action').setValue(val);
  }
  get XXX () {

    return this.ticketFG.get('fc_action').value;
  }
// ----------------------------------------------------------------------------
onSubmit(evt) {
  const {value, valid} = evt;
  console.log('onSubmit.evt', evt);
  console.log('onSubmit.valid', valid);
  console.log('onSubmit.value', value);
  console.log(this.ticketFG.value);
}
onDiscard(evt) {
  console.log('onDiscard', evt);
}

setXXX(v) {
  this.XXX = Math.random();
  return true;
}
// ============================================================================
  private _init() {
    this.ticketSelects.status = [
      {value:100, label:'New'},
      {value:200, label:'Close'},
      {value:300, label:'Open'},
      {value:400, label:'Delete'}
    ];
    this.assignUserTo = [
      {value:400, name:'Reed Richards'},
      {value:401, name:'Sue Storm'},
      {value:402, name:'Johnny Storm'},
      {value:403, name:'Ben Grimm'}
    ];

    this.ticketFG = this.fb.group( {
      'fc_response': ['', Validators.required],
      'fc_tbNewStatus':  [''],
      'fc_tbAssignee':  [''],
      'fc_action':      ['submit']
    });
  }
}