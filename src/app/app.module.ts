import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MainHostComponent } from './main-host/main-host.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ImpressionsChartComponent } from './impressions-chart/impressions-chart.component';
import { ClicksChartComponent } from './clicks-chart/clicks-chart.component';
import { CostChartComponent } from './cost-chart/cost-chart.component';
import { ConversionsChartComponent } from './conversions-chart/conversions-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MainHostComponent,
    ImpressionsChartComponent,
    ClicksChartComponent,
    CostChartComponent,
    ConversionsChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
