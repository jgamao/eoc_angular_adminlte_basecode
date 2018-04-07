import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteManagersRoutingModule } from './site-managers-routing.module';
import { SiteManagersComponent } from './site-managers.component';

@NgModule({
  imports: [
    CommonModule,
    SiteManagersRoutingModule
  ],
  declarations: [SiteManagersComponent]
})
export class SiteManagersModule { }
