import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var Prism;

@Component({
  selector: 'app-lead-info',
  templateUrl: './lead-info.component.html',
  styleUrls: ['./lead-info.component.css']
})
export class LeadInfoComponent implements OnInit, AfterViewInit {

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
