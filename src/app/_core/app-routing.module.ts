import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { TabsAComponent } from '../tabsA/tabs-a.component';
import { MainComponent } from '../main/main.component';
import { PageNotFoundComponent } from '../_shared/page-not-found/page-not-found.component';
import { StepsComponent } from '../steps/steps.component';
import { Tabs1Component } from '../tabsA/tabs1/tabs1.component';
import { Tabs2Component } from '../tabsA/tabs2/tabs2.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FormsComponent } from '../forms/forms.component';
import { TablesComponent } from '../tables/tables.component';

const routes: Routes = [
  { path:'', component:TabsAComponent },
  { path:'forms', component:FormsComponent },
  { path:'main', component:MainComponent },
  { path:'stepper', component:StepsComponent },
  { path:'toolbar', component:ToolbarComponent },
  { path: 'tab1', component: Tabs1Component },
  { path: 'tab2', component: Tabs2Component },
  { path: 'tables', component: TablesComponent },
  { path:'**', component:PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [ TabsAComponent, MainComponent, PageNotFoundComponent, StepsComponent, Tabs1Component, Tabs2Component ];