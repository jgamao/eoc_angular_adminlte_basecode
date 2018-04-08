import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LeadsService } from '../services/leads/leads.service';

declare var Prism;

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit, AfterViewInit {
  leads = [];
  errorMessage = '';

  constructor(private leads_service: LeadsService) { }

  ngOnInit() {
    this.leads_service.getLeads()
      .subscribe(
        results => this.leads = results.data,
        error => this.errorMessage = <any>error);
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
