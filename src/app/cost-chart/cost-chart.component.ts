import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
declare var google: any;

@Component({
  selector: 'app-cost-chart',
  templateUrl: './cost-chart.component.html',
  styleUrls: ['./cost-chart.component.css']
})
export class CostChartComponent implements OnInit {

  constructor(private chartService:ChartsService) { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart(){
    let data = google.visualization.arrayToDataTable(ChartsService.costData);
    let view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);

    let options = {
      title: "Cost",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    let chart = new google.visualization.ColumnChart(document.getElementById("costcolumnchart"));
    chart.draw(view, options);
  }


}
