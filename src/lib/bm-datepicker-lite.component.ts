import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";

import { CalendarDaysService } from "./services/calendar-days.service";
import { CalendarMonthsService } from "./services/calendar-months.service";
import { CalendarYearsService } from "./services/calendar-years.service";
import stylesDefault from "./styles-default";

@Component({
  selector: "bm-datepicker-lite",
  templateUrl: "./bm-datepicker-lite.component.html",
  styleUrls: ["./styles.scss"],
  animations: [
    trigger("toggleTable", [
      state(
        "open",
        style({
          opacity: 1,
          marginTop: "10px",
        })
      ),
      state(
        "close",
        style({
          height: 0,
          padding: 0,
          opacity: 0,
          marginTop: 0,
        })
      ),
      transition("open <=> close", [animate(".2s ease-out")]),
    ]),
  ],
})
export class BmDatepickerLiteComponent implements OnInit {
  @ViewChild("bmDatePicker") bmDatePicker!: ElementRef;
  @Input() label?: string | null = null;
  @Input() styleSheet: any = null;
  @Input() weekdays: any = null;
  @Input() months: any = null;
  @Input() formGroupInput!: FormGroup;
  @Input() formControlNameInput: string = "defaultFormControlName";
  @Input() placeholder: string = "Pick a date";
  @Input() pattern: string = "yyyy-mm-dd";
  @Input() isSunday: boolean = false;
  @Output() calendarOutput: EventEmitter<any> = new EventEmitter();

  date = new Date();
  inputData = { year: "0", month: "0", day: "0" };
  showDatePicker = false;
  styleElement: any = null;
  weekdayLabels: any;

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
    this.weekdayLabels = this.calendarDaysService.dayLabels;
    if (this.isSunday) {
      this.weekdayLabels.unshift(this.weekdayLabels.pop());
    }
    this.createStyle();

    const divider: any = this.pattern.match("[ -./]");
    const patternArray: any = this.pattern.split(divider[0]);
    const validatePattern = `[0-9]{${patternArray[0].length}}${divider}[0-9]{${patternArray[1].length}}${divider}[0-9]{${patternArray[2].length}}`;
    this.formGroupInput
      ?.get(this.formControlNameInput)
      ?.addValidators(Validators.pattern(validatePattern));
  }

  createStyle(): void {
    let styleElement = document.createElement("style");
    const stylesheetFormated = `${stylesDefault} ${this.styleSheet}`;
    styleElement.appendChild(document.createTextNode(stylesheetFormated));
    this.elementRef.nativeElement.appendChild(styleElement);
  }

  selectNext = () => {
    this.calendarMonthsService.nextMonth();
    this.calendarYearsService.selectedYear =
      this.calendarMonthsService.selectedMonth === 0
        ? this.calendarYearsService.selectedYear + 1
        : this.calendarYearsService.selectedYear;
    this.setFirstAndLastDay();
  };
  selectPrevious = () => {
    this.calendarMonthsService.previousMonth();
    this.calendarYearsService.selectedYear =
      this.calendarMonthsService.selectedMonth === 11
        ? this.calendarYearsService.selectedYear - 1
        : this.calendarYearsService.selectedYear;

    this.setFirstAndLastDay();
  };
  selectDay = (dayValue: any) => {
    this.inputData = {
      year: this.calendarYearsService.selectedYear.toString(),
      month: this.calendarMonthsService.returnMonthDate(dayValue).toString(),
      day: this.calendarDaysService.returnWeekdayDate(dayValue).toString(),
    };

    this.selectedDayDate(dayValue);
    const formatDate = this.formatedDate();
    this.formGroupInput?.controls[this.formControlNameInput]?.setValue(
      formatDate
    );
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
    if (parsedDay.length < 2) parsedDay = `0${parsedDay}`;
    if (
      this.calendarYearsService.selectedYear.toString() ===
        this.inputData.year &&
      selectParsedMonth === this.inputData.month &&
      parsedDay === this.inputData.day
    ) {
      return true;
    }
    return false;
  };

  formatedDate = () => {
    const formatedMonth = parseInt(this.inputData.month) + 1;
    formatedMonth.toString().length < 2
      ? (this.inputData.month = `0${formatedMonth.toString()}`)
      : (this.inputData.month = `${formatedMonth.toString()}`);

    this.inputData.day.length < 2 &&
      (this.inputData.day = `0${this.inputData.day}`);
    let formatedYear = this.inputData.year.toString();

    const getFullYear: any = this.pattern.match("yyyy");
    if (getFullYear === null) {
      formatedYear =
        formatedYear.slice(-1, 1) + formatedYear.slice(2, formatedYear.length);
    }

    const divider: any = this.pattern.match("[ -./]");
    let dateArray: any = [];
    const patternArray: any = this.pattern.split(divider[0]);
    patternArray.forEach((format: string) => {
      if (format === "dd") {
        dateArray.push(this.inputData.day);
      } else if (format === "mm") {
        dateArray.push(this.inputData.month);
      } else {
        dateArray.push(formatedYear);
      }
    });
    return `${dateArray[0]}${divider}${dateArray[1]}${divider}${dateArray[2]}`;
  };

  setFirstAndLastDay() {
    this.calendarMonthsService.firstDayOfSelectedMonth(
      this.calendarYearsService.selectedYear,
      this.calendarMonthsService.selectedMonth
    );
    this.calendarMonthsService.lastDayOfSelectedMonth(
      this.calendarYearsService.selectedYear,
      this.calendarMonthsService.selectedMonth
    );
  }
}
