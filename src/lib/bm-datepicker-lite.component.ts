import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CalendarDaysService } from './services/calendar-days.service';
import { CalendarMonthsService } from './services/calendar-months.service';
import { CalendarYearsService } from './services/calendar-years.service';
import stylesDefault from './styles-default';

@Component({
  selector: 'bm-datepicker-lite',
  templateUrl: './bm-datepicker-lite.component.html',
  styleUrls: ['./styles.scss'],
  animations: [
    trigger('toggleTable', [
      state(
        'open',
        style({
          opacity: 1,
          marginTop: '10px'
        })
      ),
      state(
        'close',
        style({
          height: 0,
          padding: 0,
          opacity: 0,
          marginTop: 0
        })
      ),
      transition('open <=> close', [animate('.2s ease-out')])
    ])
  ]
})
export class BmDatepickerLiteComponent implements OnInit {
  @ViewChild('bmDatePicker') bmDatePicker!: ElementRef;
  @Input() label!: any;
  @Input() styleSheet?: any = null;
  @Input() weekdays?: any = null;
  @Input() months?: any = null;
  @Input() formGroupInput?: FormGroup | any;
  @Input() formControlNameInput?: any;
  @Input() placeholder: string = 'Pick a date';
  @Output() calendarOutput: EventEmitter<any> = new EventEmitter();

  date = new Date();
  inputData = { year: 0, month: 0, day: 0 };
  showDatePicker = false;
  styleElement: any = null;

  constructor(
    private elementRef: ElementRef,
    public calendarYearsService: CalendarYearsService,
    public calendarMonthsService: CalendarMonthsService,
    public calendarDaysService: CalendarDaysService
  ) {}

  ngOnInit(): void {
    this.calendarYearsService.year = this.date;
    this.calendarMonthsService.month = this.date;
    this.calendarDaysService.day = this.date;
    this.calendarDaysService.selectedDay = null;
    !!this.weekdays && (this.calendarDaysService.dayLabels = this.weekdays);
    !!this.months && (this.calendarMonthsService.monthLabels = this.months);
    this.createStyle(
      this.styleSheet ? stylesDefault + this.styleSheet : stylesDefault
    );
  }

  createStyle(style: string): void {
    if (this.styleElement) {
      this.styleElement.removeChild(this.styleElement.firstChild);
    } else {
      this.styleElement = document.createElement('style');
    }
    this.styleElement.appendChild(document.createTextNode(style));
    this.elementRef.nativeElement.appendChild(this.styleElement);
  }

  selectNext = () => {
    this.calendarMonthsService.nextMonth();
    this.calendarYearsService.selectedYear =
      this.calendarMonthsService.selectedMonth === 0
        ? this.calendarYearsService.selectedYear + 1
        : this.calendarYearsService.selectedYear;

    this.calendarMonthsService.firstDayOfSelectedMonth(
      this.calendarYearsService.selectedYear,
      this.calendarMonthsService.selectedMonth
    );
    this.calendarMonthsService.lastDayOfSelectedMonth(
      this.calendarYearsService.selectedYear,
      this.calendarMonthsService.selectedMonth
    );
  };
  selectPrevious = () => {
    this.calendarMonthsService.previousMonth();
    this.calendarYearsService.selectedYear =
      this.calendarMonthsService.selectedMonth === 11
        ? this.calendarYearsService.selectedYear - 1
        : this.calendarYearsService.selectedYear;

    this.calendarMonthsService.firstDayOfSelectedMonth(
      this.calendarYearsService.selectedYear,
      this.calendarMonthsService.selectedMonth
    );
    this.calendarMonthsService.lastDayOfSelectedMonth(
      this.calendarYearsService.selectedYear,
      this.calendarMonthsService.selectedMonth
    );
  };
  selectDay = (dayValue: any) => {
    const formatDay = this.calendarDaysService.returnWeekdayDate(dayValue);
    this.calendarDaysService.selectedDay = formatDay;
    this.inputData = {
      year: this.calendarYearsService.selectedYear,
      month: this.calendarMonthsService.selectedMonth,
      day: formatDay
    };
    const parsedMonth = this.calendarMonthsService.selectedMonth + 1;
    this.bmDatePicker.nativeElement.value = `${this.inputData.year}-${
      this.inputData.month < 10 ? `0${parsedMonth.toString()}` : parsedMonth
    }-${
      this.inputData.day < 10 ? '0' + this.inputData.day : this.inputData.day
    }`;
    this.calendarOutput.emit(dayValue);
    this.showDatePicker = false;
  };
}
