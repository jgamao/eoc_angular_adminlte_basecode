import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteManagersComponent } from './site-managers.component';

const routes: Routes = [{
  path: '',
  component: SiteManagersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteManagersRoutingModule { }
