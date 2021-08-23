import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  constructor() {
    // this.alwaysShowCalendars = true;
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

  }

  ngOnInit(): void {}


  addEvent(e, event) {
    console.log('whattt ', event)
  }
}



