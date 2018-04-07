import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

declare var Prism;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

	leads_chart = [];
	revenue_chart = [];

	ngOnInit() {
	}
  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();

    this.leads_chart = new Chart('leads_chart', {
      type: 'line',
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

    this.revenue_chart = new Chart('revenue_chart', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [50, 70, 45, 80, 87],
          backgroundColor: ['#f56954','#00a65a','#f39c12','#00c0ef','#3c8dbc'],
          label: 'Dataset 1'
        }],
      }
    });
  }
}
