import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import WebsiteMetrics from "../data/sample.json";

export interface MetricData {
  timestamp: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['timestamp', 'impressions', 'clicks', 'cost', 'conversions'];
  dataSource: MatTableDataSource<MetricData>;
  @ViewChild(MatSort) sort: MatSort;  
  showDataBars = true;

  maxValues = {
    'impressions':0,
    'clicks':0,
    'cost':0,
    'conversions':0
  }

  // -------------------------------------------------------------------
  constructor() { }
  // -------------------------------------------------------------------
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(WebsiteMetrics.data);

    this.dataSource.data.sort((el1,el2) => { // sort by impressions by default
      if (el1.impressions > el2.impressions) return -1;
      if (el1.impressions < el2.impressions) return 1;
      return 0;
    })

    this.initMaxValues();
  }
  // -------------------------------------------------------------------
  // For normalized data bars
  // -------------------------------------------------------------------
  initMaxValues() {
    this.maxValues.impressions = Math.max(...this.dataSource.data.map(element => element['impressions']));
    this.maxValues.clicks = Math.max(...this.dataSource.data.map(element => element['clicks']));
    this.maxValues.cost = Math.max(...this.dataSource.data.map(element => element['cost']));
    this.maxValues.conversions = Math.max(...this.dataSource.data.map(element => element['conversions']));
  }
  // -------------------------------------------------------------------
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
