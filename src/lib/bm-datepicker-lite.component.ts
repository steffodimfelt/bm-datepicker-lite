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
import { FormGroup, Validators } from '@angular/forms';

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
  @Input() pattern: string = 'YYYY-MM-DD';
  @Output() calendarOutput: EventEmitter<any> = new EventEmitter();

  date = new Date();
  inputData = { year: '0', month: '0', day: '0' };
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

    this.formGroupInput.get(this.formControlNameInput)?.disable();

    switch (this.pattern) {
      case 'YYYY/MM/DD':
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{4}/[0-9]{2}/[0-9]{2}$'));
        break;
      case 'YY/MM/DD':
      case 'MM/DD/YY':
      case 'DD/MM/YY':
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{2}/[0-9]{2}/[0-9]{2}$'));
        break;
      case 'YY-MM-DD':
      case 'MM-DD-YY':
      case 'DD-MM-YY':
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{2}-[0-9]{2}-[0-9]{2}$'));
        break;
      case 'DD.MM.YY':
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{2}.[0-9]{2}.[0-9]{2}$'));
        break;
      case 'YYYY/MM/DD':
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{4}/[0-9]{2}/[0-9]{2}$'));
        break;
      case 'MM/DD/YYYY':
      case 'DD/MM/YYYY':
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{2}/[0-9]{2}/[0-9]{4}$'));
        break;
      case 'MM-DD-YYYY':
      case 'DD-MM-YYYY':
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{2}-[0-9]{2}-[0-9]{4}$'));
        break;
      default:
        this.formGroupInput
          .get(this.formControlNameInput)
          .addValidators(Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$'));
        break;
    }
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
    this.inputData = {
      year: this.calendarYearsService.returnYearDate(dayValue).toString(),
      month: this.calendarMonthsService.returnMonthDate(dayValue).toString(),
      day: this.calendarDaysService.returnWeekdayDate(dayValue).toString()
    };
    this.selectedDayDate(dayValue);
    const formatDate = this.formatedDate();
    this.calendarOutput.emit(formatDate);
    this.bmDatePicker.nativeElement.value = formatDate;
    this.showDatePicker = false;
  };

  selectedDayDate = (dayDate: any) => {
    let parsedDay = this.calendarDaysService
      .returnWeekdayDate(dayDate)
      .toString();
    let selectParsedMonth =
      this.calendarMonthsService.returnMonthDate(dayDate) + 1;
    selectParsedMonth = selectParsedMonth.toString();
    selectParsedMonth.length < 2 &&
      (selectParsedMonth = `0${selectParsedMonth}`);
    let parsedYear = this.calendarYearsService
      .returnYearDate(dayDate)
      .toString();
    if (parsedDay.length < 2) parsedDay = `0${parsedDay}`;
    if (
      parsedYear === this.inputData.year &&
      selectParsedMonth === this.inputData.month &&
      parsedDay === this.inputData.day
    ) {
      return true;
    }
    return false;
  };

  formatedDate = () => {
    const parsedMonth = parseInt(this.inputData.month) + 1;
    parsedMonth.toString().length < 2
      ? (this.inputData.month = `0${parsedMonth.toString()}`)
      : (this.inputData.month = `${parsedMonth.toString()}`);
    if (this.inputData.day.length < 2)
      this.inputData.day = `0${this.inputData.day}`;
    let formatedYear = this.inputData.year.toString();

    if (
      this.pattern === 'YY/MM/DD' ||
      this.pattern === 'MM/DD/YY' ||
      this.pattern === 'DD/MM/YY' ||
      this.pattern === 'DD.MM.YY' ||
      this.pattern === 'MM-DD-YY' ||
      this.pattern === 'DD-MM-YY' ||
      this.pattern === 'YY-MM-DD'
    ) {
      formatedYear =
        formatedYear.slice(-1, 1) + formatedYear.slice(2, formatedYear.length);
    }

    switch (this.pattern) {
      case 'YYYY/MM/DD':
      case 'YY/MM/DD':
        return [formatedYear, this.inputData.month, this.inputData.day].join(
          '/'
        );
      case 'MM/DD/YY':
      case 'MM/DD/YYYY':
        return [this.inputData.month, this.inputData.day, formatedYear].join(
          '/'
        );
      case 'DD/MM/YY':
      case 'DD/MM/YYYY':
        return [this.inputData.day, this.inputData.month, formatedYear].join(
          '/'
        );
      case 'DD.MM.YYYY':
      case 'DD.MM.YY':
        return [this.inputData.day, this.inputData.month, formatedYear].join(
          '.'
        );
      case 'MM-DD-YY':
      case 'MM-DD-YYYY':
        return [this.inputData.month, this.inputData.day, formatedYear].join(
          '-'
        );
      case 'DD-MM-YY':
      case 'DD-MM-YYYY':
        return [this.inputData.day, this.inputData.month, formatedYear].join(
          '-'
        );
      default:
        return [formatedYear, this.inputData.month, this.inputData.day].join(
          '-'
        );
    }
  };
}
