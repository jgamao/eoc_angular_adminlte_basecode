import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteManagersRoutingModule } from './site-managers-routing.module';
import { SiteManagersComponent } from './site-managers.component';
import { SiteManagersService } from '../services/site-managers/site-managers.service';
import { BoxModule } from '../../../../src';

@NgModule({
  imports: [
    CommonModule,
    SiteManagersRoutingModule,
    BoxModule,
  ],
  declarations: [SiteManagersComponent],
  providers: [SiteManagersService]
})
export class SiteManagersModule { }
