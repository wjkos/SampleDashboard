import { Injectable } from '@angular/core';
import WebsiteMetrics from "./data/sample.json";
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  static impressionsData = [];
  static clicksData = [];
  static costData = [];
  static conversionsData = [];

  constructor() {
    ChartsService.getImpressionsForChart();
    ChartsService.getClicksForChart();
    ChartsService.getCostForChart();
    ChartsService.getConversionsForChart();
  }

  static getImpressionsForChart(){
    ChartsService.impressionsData.push(['Date','Impressions',{ role: "style" } ]);
    for(let record of WebsiteMetrics.data) {
      ChartsService.impressionsData.push([record['timestamp'].split(' ')[0],record['impressions'],'#2596be']);
    }
  }
  static getClicksForChart(){
    ChartsService.clicksData.push(['Date','Clicks',{ role: "style" }]);
    for(let record of WebsiteMetrics.data) {
      ChartsService.clicksData.push([record['timestamp'].split(' ')[0],record['clicks'],'#893392']);
    }
  }
  static getCostForChart(){
    ChartsService.costData.push(['Date','Cost',{ role: "style" }]);
    for(let record of WebsiteMetrics.data) {
      ChartsService.costData.push([record['timestamp'].split(' ')[0],record['cost'],'#cca432']);
    }
  }
  static getConversionsForChart(){
    ChartsService.conversionsData.push(['Date','Conversions',{ role: "style" }]);
    for(let record of WebsiteMetrics.data) {
      ChartsService.conversionsData.push([record['timestamp'].split(' ')[0],record['conversions'],'#33926f']);
    }
  }
}
