import { AuthGuard } from './guard/auth-guard.guard';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from '../../../src';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthService],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
