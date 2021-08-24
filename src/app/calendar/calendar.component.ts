import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as moment from 'moment';

// https://stackoverflow.com/questions/39126299/typescript-append-html-to-container-element-in-angular-2

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  currentDay: Date;
  currentYear: number;
  currentMonth: number;
  months: Object;
  days: Object;
  date: any = 1;
  firstDay: number;
  tbl: ElementRef;
  calBodyInner: string = ''
  monthAndYearInner: string;
  //we are going to use this in ngaafterview init
  @ViewChild('calendarBody', { static: false }) calendarBody: ElementRef;
  @ViewChild('monthAndYear', { static: false }) monthAndYear: ElementRef;
  @ViewChild('month', { static: false }) selectMonth: ElementRef;
  @ViewChild('year', { static: false }) selectYear: ElementRef;
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private renderer: Renderer2
  ) {
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
    this.days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];

    // console.log('Heyyy', this.showCalendar(1, 2021));
  }

  ngAfterViewInit() {
    //call this.showCalendar in here
    // const d2 = this.renderer.createElement('div');
    // const text = this.renderer.createText('two');
    // this.renderer.appendChild(d2, text);
    // this.renderer.appendChild(this.d1.nativeElement, d2);
    //what do we want to do here
    this.tbl = this.calendarBody.nativeElement;
    // console.log('Boom ', this.tbl);
    this.showCalendar(this.currentMonth, this.currentYear, this.tbl);
    // console.log('I am the Month Year Chump ', this.monthAndYear);
  }

  showCalendar(month: any, year: number, calBodyRef: ElementRef) {
    let firstDay = new Date(year, month).getDay();
    console.log(`Month: ${month}!, Year: ${month}!`);
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    console.log('Days in Month! ', daysInMonth);

    // clearing all previous cells
    // console.log('I am tbll!!!!!: ', ;
    this.calBodyInner = '';
    // filing data about month and in the page via DOM.
    // this.monthAndYear.nativeElement.innerHTML = this.months[month] + ' ' + year;
    this.monthAndYearInner = this.months[month] + ' ' + year;
    console.log('monthAndYearInner ', this.monthAndYearInner)
    this.selectYear.nativeElement.value = year;
    this.selectMonth.nativeElement.value = month;

    this.createCells(firstDay, daysInMonth, calBodyRef);
  }

  createCells(firstDay: number, daysInMonth: number, calBodyRef: ElementRef) {
    for (let i = 0; i < 6; i++) {
      const row = this._document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          const cell = this._document.createElement('tr');
          const cellText = this._document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (this.date > daysInMonth) {
          break;
        } else {
          const cell = this._document.createElement('td');
          const cellText = document.createTextNode(this.date);
          if (
            this.date === this.currentDay.getDate() &&
            this.currentYear === this.currentDay.getFullYear() &&
            this.currentMonth === this.currentDay.getMonth()
          ) {
            cell.classList.add('bg-info');
          } //
          cell.appendChild(cellText);
          row.appendChild(cell);
          this.date++;
        }
      }
      // let tbl = document.getElementById("calendar-body"); /
      // tbl.appendChild(row);
      this.renderer.appendChild(calBodyRef, row);
    }
  }

  addEvent(e, event) {
    console.log('whattt ', event);
  }
}
