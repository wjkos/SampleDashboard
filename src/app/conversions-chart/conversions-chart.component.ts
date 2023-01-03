import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
declare var google: any;

@Component({
  selector: 'app-conversions-chart',
  templateUrl: './conversions-chart.component.html',
  styleUrls: ['./conversions-chart.component.css']
})
export class ConversionsChartComponent implements OnInit {

  constructor(private chartService:ChartsService) { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(() => { this.drawChart(this.chartService) }); // pass an arrow func to preserve "this"
  }
  drawChart(chartService){
    let data = google.visualization.arrayToDataTable(chartService.conversionsData);
    let view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);

    let options = {
      title: "Conversions",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    let chart = new google.visualization.ColumnChart(document.getElementById("conversionscolumnchart"));
    chart.draw(view, options);
  }

}
