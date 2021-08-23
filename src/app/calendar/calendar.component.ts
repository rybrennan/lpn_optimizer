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

  // isInvalidDate(date) {
  //   return date.weekday() === 0;
  // }

  // onChange(e) {
  //   console.log('I am the event ',e)
  // }

  // isCustomDate(date) {
  //   return date.weekday() === 0 || date.weekday() === 6
  //     ? 'mycustomdate'
  //     : false;
  // }
}





// @Component({
//   selector: 'datepicker-min-max-example',
//   templateUrl: 'datepicker-min-max-example.html',
// })
// export class DatepickerMinMaxExample {
//   minDate: Date;
//   maxDate: Date;

//   constructor() {
//     // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
//     const currentYear = new Date().getFullYear();
//     this.minDate = new Date(currentYear - 20, 0, 1);
//     this.maxDate = new Date(currentYear + 1, 11, 31);
//   }
// }