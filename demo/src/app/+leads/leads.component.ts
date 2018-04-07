import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var Prism;

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
