import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatListModule, 
  MatSidenavModule, 
  MatSliderModule, 
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ]
})
export class MaterialModule { }
