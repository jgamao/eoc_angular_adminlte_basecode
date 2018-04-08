import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadInfoRoutingModule } from './lead-info-routing.module';
import { LeadInfoComponent } from './lead-info.component';

import { TabsModule as MkTabsModule, BoxModule, DropdownModule } from '../../../../src';

@NgModule({
  imports: [
    CommonModule,
    LeadInfoRoutingModule,
    MkTabsModule,
    BoxModule,
    DropdownModule
  ],
  declarations: [LeadInfoComponent]
})
export class LeadInfoModule { }
