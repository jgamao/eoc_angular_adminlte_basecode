import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from 'ng-fullcalendar';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { EventService } from '../services/events/event.service';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule
  ],
  declarations: [CalendarComponent],
  providers: [EventService]
})
export class CalendarModule { }
