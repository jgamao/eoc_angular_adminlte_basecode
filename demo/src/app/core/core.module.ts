import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BoxModule, TabsModule, DropdownModule, BoxInfoModule as MkBoxInfoModule } from '../../../../src';

import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component';
import { SidebarRightInnerComponent } from './sidebar-right-inner/sidebar-right-inner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DropdownModule,
    TabsModule,
    BoxModule,
    MkBoxInfoModule
  ],
  declarations: [HeaderInnerComponent, SidebarLeftInnerComponent, SidebarRightInnerComponent],
  exports: [BoxModule, TabsModule, MkBoxInfoModule, HeaderInnerComponent, SidebarLeftInnerComponent, SidebarRightInnerComponent]
})
export class CoreModule { }
