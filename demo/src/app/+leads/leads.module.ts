import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { TabsModule as MkTabsModule, BoxModule, DropdownModule } from '../../../../src';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
    MkTabsModule,
    BoxModule,
    DropdownModule
  ],
  declarations: [LeadsComponent]
})
export class LeadsModule { }
