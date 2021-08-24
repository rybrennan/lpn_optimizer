import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentDay: Date;
  currentYear: number;
  currentMonth: number;
  months: Object;
  days: Object;
  date: number = 1;
  firstDay: number;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    // this.alwaysShowCalendars = true;
    const currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.currentDay = new Date();
    this.currentYear = new Date().getFullYear();
    this.currentMonth = this.currentDay.getMonth();
    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    this.days = [
      'Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'
    ]

    console.log('Heyyy', this.showCalendar(1, 2021));
  }

  showCalendar(month: any, year: number) {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    console.log('Days in Month ', daysInMonth);
  }

  createCells(firstDay: number, daysInMonth: number) {
    for (let i = 0; i < 6; i++) {
      const row = this._document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          const cell = this._document.createElement('tr');
          const cellText = this._document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (this.date > daysInMonth) {

        }
      }
    }
  }

  addEvent(e, event) {
    console.log('whattt ', event);
  }
}
