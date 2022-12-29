import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
declare var google: any;

@Component({
  selector: 'app-clicks-chart',
  templateUrl: './clicks-chart.component.html',
  styleUrls: ['./clicks-chart.component.css']
})
export class ClicksChartComponent implements OnInit {

  constructor(private chartService:ChartsService) { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart(){
    let data = google.visualization.arrayToDataTable(ChartsService.clicksData);
    let view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2]);

    let options = {
      title: "Clicks",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    let chart = new google.visualization.ColumnChart(document.getElementById("clickscolumnchart"));
    chart.draw(view, options);
  }

}
