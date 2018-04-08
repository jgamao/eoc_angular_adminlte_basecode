import { Component, OnInit } from '@angular/core';
import { SiteManagersService } from '../services/site-managers/site-managers.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-site-managers',
  templateUrl: './site-managers.component.html',
  styleUrls: ['./site-managers.component.css']
})
export class SiteManagersComponent implements OnInit {
	site_managers = [];
  errorMessage = '';

  constructor(private site_managers_service:SiteManagersService) { }

  ngOnInit() {
  	this.site_managers_service.getSiteManagers()
      .subscribe(
        results => this.site_managers = results.data,
        error => this.errorMessage = <any>error);
  }

}
