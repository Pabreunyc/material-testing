import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatListModule, 
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule, 
  MatSliderModule, 
  MatStepperModule, 
  MatTableModule, 
  MatTabsModule, 
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSliderModule,
    LayoutModule,    
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,    
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,    
  ]
})
export class MaterialModule { }
