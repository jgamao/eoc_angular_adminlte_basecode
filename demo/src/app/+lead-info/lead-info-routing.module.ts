import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadInfoComponent } from './lead-info.component';

const routes: Routes = [{
  path: '',
  component: LeadInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadInfoRoutingModule { }
