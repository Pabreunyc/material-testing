import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './_shared/material.module';
import { AppRoutingModule, routingComponents } from './_core/app-routing.module';

import { HeaderComponent } from './_shared/header/header.component';
import { MainNavComponent } from './main/main-nav/main-nav.component';

import { Tabs1Component } from './tabsA/tabs1/tabs1.component';
import { Tabs2Component } from './tabsA/tabs2/tabs2.component';
import { StepsComponent } from './steps/steps.component';
import { TransfersSearchComponent } from './main/transfers-search/transfers-search.component';
import { TransfersComponent } from './main/transfers/transfers.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    routingComponents,

    AppComponent,
    HeaderComponent,
    MainNavComponent,

    Tabs1Component,
    Tabs2Component,
    StepsComponent,
    TransfersSearchComponent,
    TransfersComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
