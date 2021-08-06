import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatInputModule, 
  MatListModule, 
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule, 
  MatSliderModule,
  MatSortModule,
  MatStepperModule, 
  MatTableModule, 
  MatTabsModule, 
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSliderModule,
    LayoutModule,    
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatStepperModule,    
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule { }
