import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

declare var Prism;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, AfterViewInit {

	reports = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    Prism.highlightAll();

    this.reports = new Chart('reports_chart', {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: '# of Appointments',
            data: [12, 19, 3, 5, 2, 3, 4, 5, 6, 12, 11, 12],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor:'rgba(255,99,132,1)',
            borderWidth: 1
          },
          {
            label: '# of Won Clients',
            data: [10, 12, 13, 15, 12, 13, 14, 15, 16, 10, 1, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor:'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}
