import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { TabsModule as MkTabsModule, BoxModule, DropdownModule } from '../../../../src';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MkTabsModule,
    BoxModule,
    DropdownModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
