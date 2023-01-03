import { Injectable } from '@angular/core';
import WebsiteMetrics from "./data/sample.json";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  impressionsData = [];  // holds the data in a format required by Google charts
  clicksData = [];
  costData = [];
  conversionsData = [];
  
  constructor() {
    this.getImpressionsForChart();
    this.getClicksForChart();
    this.getCostForChart();
    this.getConversionsForChart();
  }

  getImpressionsForChart(){
    this.impressionsData.push(['Date','Impressions',{ role: "style" } ]);
    for(let record of WebsiteMetrics.data) {
      this.impressionsData.push([record['timestamp'].split(' ')[0],record['impressions'],'#2596be']);
    }
  }
  getClicksForChart(){
    this.clicksData.push(['Date','Clicks',{ role: "style" }]);
    for(let record of WebsiteMetrics.data) {
      this.clicksData.push([record['timestamp'].split(' ')[0],record['clicks'],'#893392']);
    }
  }
  getCostForChart(){
    this.costData.push(['Date','Cost',{ role: "style" }]);
    for(let record of WebsiteMetrics.data) {
      this.costData.push([record['timestamp'].split(' ')[0],record['cost'],'#cca432']);
    }
  }
  getConversionsForChart(){
    this.conversionsData.push(['Date','Conversions',{ role: "style" }]);
    for(let record of WebsiteMetrics.data) {
      this.conversionsData.push([record['timestamp'].split(' ')[0],record['conversions'],'#33926f']);
    }
  }
}
