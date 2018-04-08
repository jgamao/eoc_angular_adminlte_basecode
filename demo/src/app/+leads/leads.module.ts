import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsService } from '../services/leads/leads.service';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { BoxModule } from '../../../../src';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
    BoxModule,
  ],
  declarations: [LeadsComponent],
  providers: [LeadsService]
})
export class LeadsModule { }
