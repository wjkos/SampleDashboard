import { Component, OnInit } from '@angular/core';
import WebsiteMetrics from "../data/sample.json";

@Component({
  selector: 'app-main-host',
  templateUrl: './main-host.component.html',
  styleUrls: ['./main-host.component.css']
})
export class MainHostComponent implements OnInit {

  values: any;

  constructor() { }

  ngOnInit(): void {
  }

}
