import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import * as i5 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i4 from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var stylesDefault = `
p{
    font-family:"Poppins", Verdana, sans-serif;
    color: #000;
    margin:0;
    padding:0;
} 
input{
    font-family:"Poppins", Verdana, sans-serif;
    color: #000;
    margin:0;
    padding:0;
} 
label{
    font-family:"Poppins", Verdana, sans-serif;
    color: #000;
    margin:0;
    padding:0;
    font-size: .9rem;
    font-weight: 500;
    margin-left:15px;
}
.bm-date-input{
    display:flex;
    flex:1;height:40px;
    border-radius: 9999px;
    padding: 3px 0 3px 20px; 
    border: 1px solid rgb(195, 195, 195)
}
.bm-date-input-wrapper{
    position:relative; 
    width: 100%; 
    display:flex;
    flex-direction:row; 
    align-items: center;
}
.bm-date-input-wrapper input[readonly] { 
    cursor: default !important;
    background:  rgb(245,245,245);
}
.bm-toggle-button{
    position:absolute; 
    right:5px; 
    width:30px; 
    height:30px;
    display:flex;
    align-items:center; 
    justify-content:center; 
    background-color:rgb(0, 153, 235);
    border: 1px solid rgb(0, 153, 235);
    border-radius: 9999px;
    transition:.5s
}
.bm-toggle-button:hover{
    background-color: rgb(0, 131, 202);
    cursor:pointer;
    color:fff;
    border: 1px solid rgb(0, 131, 202)
}
.bm-table{
    width:100%; 
    background-color:#f5f5f5;
    overflow: hidden;
    padding:16px; 
    display:flex;
    flex-direction: column; 
    border-radius: 8px; 
    box-shadow: 0 0 0.125rem 0 rgba(0,0,0,0.08), 0 0.125rem 0.75rem 0 rgba(0,0,0,0.24);
    box-sizing:border-box;
}
.bm-tr{
    display:flex;
    flex:1; 
    justify-content:space-between; 
    align-items:center;
    flex-direction: row;
}
.bm-th{
    display:flex; 
    flex:1; 
    justify-content:center; 
    align-items:center;
    flex-direction:row;
}
.bm-td{
    display:flex; 
    flex:1;
    justify-content:center; 
    align-items: center; 
}
.bm-td-empty{
    display:flex; 
    flex:1;
    justify-content:center; 
    align-items: center; 
}
.bm-td-empty-month{
    display:flex; 
    flex:1;
    justify-content:center; 
    align-items: center; 
}
.bm-td-empty .bm-td-inner-empty{
    height:30px;
    width:30px;
    margin:2px;
}
.bm-td-inner{
    height:30px;
    width:30px;
    margin:2px;
    display:flex; 
    justify-content:center; 
    align-items: center; 
    border-radius:9999px;
    transition: .4s;
    border: 1px solid #f5f5f5;
}
.bm-td-inner:hover{
    background-color: rgb(0, 131, 202);
    cursor:pointer;
    border: 1px solid rgb(0, 131, 202)
}
.bm-td-selected-day{
    background-color: rgb(0, 153, 235);
    cursor:pointer;
    border: 1px solid rgb(0, 153, 235)
}
.bm-td-inner:hover p{color:#fff}
.bm-td-selected-day p{color:#fff}
.bm-th p{
    font-size: .9rem;
    font-weight: 500;
}
.bm-td-inner p{
    font-size: .8rem;
    font-weight: 300;
}
.bm-daylabels-wrapper{margin-bottom: 20px}
.bm-year-month-title {
    display:flex; 
    flex: 5;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px
}
.bm-year-month-title p.bm-month-title{
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: -8px
}
.bm-td-current-day{border: 1px solid rgb(0, 202, 101)}
.bm-td-before-day{ 
    pointer-events:none;
    background: repeating-linear-gradient(-55deg,rgb(222, 222, 222), rgb(222, 222, 222) 2px,rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px);
    border: 1px solid rgb(222, 222, 222)}
.bm-arrow {
    border: solid #000;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}
.bm-td-inner:hover .bm-arrow{
    border-color:white;
    border-width: 0 3px 3px 0;
}
.bm-arrow-right {transform: rotate(-45deg);}
.bm-arrow-left {transform: rotate(135deg);}
.bm-weekend {color: #ff0000}
`;

class CalendarYearsService {
    constructor() { }
    get currentYear() {
        return this._currentYear;
    }
    get selectedYear() {
        return this._selectedYear;
    }
    set nextYear(monthValue) {
        this._selectedYear =
            monthValue === 0 ? this._selectedYear + 1 : this._selectedYear;
    }
    set previousYear(monthValue) {
        this._selectedYear =
            monthValue === 11 ? this._selectedYear - 1 : this._selectedYear;
    }
    set selectedYear(yearValue) {
        this._selectedYear = yearValue;
    }
    set year(date) {
        this._year = date;
        this._currentYear = this._year.getFullYear();
        this._selectedYear = this._year.getFullYear();
    }
    returnYearDate(dayInfo) {
        return dayInfo.getFullYear();
    }
}
CalendarYearsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarYearsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CalendarYearsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarYearsService, providedIn: 'platform' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarYearsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'platform'
                }]
        }], ctorParameters: function () { return []; } });

class CalendarMonthsService {
    constructor() {
        this._yearAltered = 0;
        this.formatToWeekArray = (datesArray) => {
            let formatedArray = [];
            let skipDays = 0;
            for (let weekIndex = 0; weekIndex < datesArray.length / 7; weekIndex++) {
                formatedArray.push([]);
                for (let dayIndex = skipDays; dayIndex < skipDays + 7; dayIndex++) {
                    formatedArray[weekIndex].push(datesArray[dayIndex]);
                }
                skipDays = skipDays + 7;
            }
            return formatedArray;
        };
    }
    get currentMonth() {
        return this._currentMonth;
    }
    get selectedMonth() {
        return this._selectedMonth;
    }
    get selectedMonthName() {
        return this._monthLabels[this._selectedMonth];
    }
    get selectedMonthDays() {
        return new Date(this._selectedYear, this._selectedMonth, 0).getDate();
    }
    get emptyDaysAtBeginning() {
        let emptyDayArray = this._firstDayOfSelectedMonth.getDay() === 0
            ? [null, null, null, null, null, null]
            : [];
        for (let x = 1; x < this._firstDayOfSelectedMonth.getDay(); x++) {
            emptyDayArray.push(null);
        }
        return emptyDayArray;
    }
    get selectedMonthDaysArray() {
        let selectedMonthArray = new Date(this._selectedYear, this._selectedMonth, 1);
        let datesArray = this.emptyDaysAtBeginning;
        while (selectedMonthArray.getMonth() === this._selectedMonth) {
            datesArray.push(new Date(selectedMonthArray));
            selectedMonthArray.setDate(selectedMonthArray.getDate() + 1);
        }
        return this.formatToWeekArray(datesArray);
    }
    set month(date) {
        this._date = date;
        this._currentMonth = date.getMonth();
        this._selectedMonth = date.getMonth();
        this._selectedYear = date.getFullYear();
        this._monthLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this._firstDayOfSelectedMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        this._lastDayOfSelectedMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    set monthLabels(monthLabels) {
        this._monthLabels = monthLabels;
    }
    firstDayOfSelectedMonth(selectedYear, selectedMonth) {
        this._firstDayOfSelectedMonth = new Date(selectedYear, selectedMonth, 1);
    }
    lastDayOfSelectedMonth(selectedYear, selectedMonth) {
        this._lastDayOfSelectedMonth = new Date(selectedYear, selectedMonth + 1, 0);
    }
    nextMonth() {
        this._selectedMonth =
            this._selectedMonth >= 11
                ? (this._selectedMonth = 0)
                : this._selectedMonth + 1;
    }
    previousMonth() {
        this._selectedMonth =
            this._selectedMonth === 0
                ? (this._selectedMonth = 11)
                : this._selectedMonth - 1;
    }
    set selectedMonth(monthValue) {
        this._selectedMonth = monthValue;
    }
    returnMonthDate(dayInfo) {
        return dayInfo.getMonth();
    }
}
CalendarMonthsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarMonthsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CalendarMonthsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarMonthsService, providedIn: 'platform' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarMonthsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'platform'
                }]
        }], ctorParameters: function () { return []; } });

class CalendarDaysService {
    constructor() { }
    get currentDay() {
        return this._currentDay;
    }
    get selectedDay() {
        return this._selectedDay;
    }
    get dayLabels() {
        return this._dayLabels;
    }
    set day(date) {
        this._currentDay = date.getDate();
        this._selectedDay = date.getDate();
        this._dayLabels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    }
    set selectedDay(dayValue) {
        this._selectedDay = dayValue;
    }
    set dayLabels(weekdays) {
        this._dayLabels = weekdays;
    }
    returnWeekdayDate(dayInfo) {
        return dayInfo.getDate();
    }
}
CalendarDaysService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarDaysService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CalendarDaysService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarDaysService, providedIn: 'platform' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CalendarDaysService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'platform'
                }]
        }], ctorParameters: function () { return []; } });

class BmDatepickerLiteComponent {
    constructor(elementRef, calendarYearsService, calendarMonthsService, calendarDaysService) {
        this.elementRef = elementRef;
        this.calendarYearsService = calendarYearsService;
        this.calendarMonthsService = calendarMonthsService;
        this.calendarDaysService = calendarDaysService;
        this.label = null;
        this.styleSheet = null;
        this.weekdays = null;
        this.months = null;
        this.formControlNameInput = 'defaultFormControlName';
        this.placeholder = 'Pick a date';
        this.pattern = 'yyyy-mm-dd';
        this.calendarOutput = new EventEmitter();
        this.date = new Date();
        this.inputData = { year: '0', month: '0', day: '0' };
        this.showDatePicker = false;
        this.styleElement = null;
        this.selectNext = () => {
            this.calendarMonthsService.nextMonth();
            this.calendarYearsService.selectedYear =
                this.calendarMonthsService.selectedMonth === 0
                    ? this.calendarYearsService.selectedYear + 1
                    : this.calendarYearsService.selectedYear;
            this.setFirstAndLastDay();
        };
        this.selectPrevious = () => {
            this.calendarMonthsService.previousMonth();
            this.calendarYearsService.selectedYear =
                this.calendarMonthsService.selectedMonth === 11
                    ? this.calendarYearsService.selectedYear - 1
                    : this.calendarYearsService.selectedYear;
            this.setFirstAndLastDay();
        };
        this.selectDay = (dayValue) => {
            var _a, _b;
            this.inputData = {
                year: this.calendarYearsService.returnYearDate(dayValue).toString(),
                month: this.calendarMonthsService.returnMonthDate(dayValue).toString(),
                day: this.calendarDaysService.returnWeekdayDate(dayValue).toString()
            };
            this.selectedDayDate(dayValue);
            const formatDate = this.formatedDate();
            (_b = (_a = this.formGroupInput) === null || _a === void 0 ? void 0 : _a.controls[this.formControlNameInput]) === null || _b === void 0 ? void 0 : _b.setValue(formatDate);
            this.calendarOutput.emit(formatDate);
            this.bmDatePicker.nativeElement.value = formatDate;
            this.showDatePicker = false;
        };
        this.selectedDayDate = (dayDate) => {
            let parsedDay = this.calendarDaysService
                .returnWeekdayDate(dayDate)
                .toString();
            let selectParsedMonth = this.calendarMonthsService.returnMonthDate(dayDate) + 1;
            selectParsedMonth = selectParsedMonth.toString();
            selectParsedMonth.length < 2 &&
                (selectParsedMonth = `0${selectParsedMonth}`);
            let parsedYear = this.calendarYearsService
                .returnYearDate(dayDate)
                .toString();
            if (parsedDay.length < 2)
                parsedDay = `0${parsedDay}`;
            if (parsedYear === this.inputData.year &&
                selectParsedMonth === this.inputData.month &&
                parsedDay === this.inputData.day) {
                return true;
            }
            return false;
        };
        this.formatedDate = () => {
            const formatedMonth = parseInt(this.inputData.month) + 1;
            formatedMonth.toString().length < 2
                ? (this.inputData.month = `0${formatedMonth.toString()}`)
                : (this.inputData.month = `${formatedMonth.toString()}`);
            this.inputData.day.length < 2 &&
                (this.inputData.day = `0${this.inputData.day}`);
            let formatedYear = this.inputData.year.toString();
            const getFullYear = this.pattern.match('yyyy');
            if (getFullYear === null) {
                formatedYear =
                    formatedYear.slice(-1, 1) + formatedYear.slice(2, formatedYear.length);
            }
            const divider = this.pattern.match('[ -./]');
            let dateArray = [];
            const patternArray = this.pattern.split(divider[0]);
            patternArray.forEach((format) => {
                if (format === 'dd') {
                    dateArray.push(this.inputData.day);
                }
                else if (format === 'mm') {
                    dateArray.push(this.inputData.month);
                }
                else {
                    dateArray.push(formatedYear);
                }
            });
            return `${dateArray[0]}${divider}${dateArray[1]}${divider}${dateArray[2]}`;
        };
    }
    ngOnInit() {
        var _a, _b;
        this.calendarYearsService.year = this.date;
        this.calendarMonthsService.month = this.date;
        this.calendarDaysService.day = this.date;
        this.calendarDaysService.selectedDay = null;
        !!this.weekdays && (this.calendarDaysService.dayLabels = this.weekdays);
        !!this.months && (this.calendarMonthsService.monthLabels = this.months);
        this.createStyle();
        const divider = this.pattern.match('[ -./]');
        const patternArray = this.pattern.split(divider[0]);
        const validatePattern = `[0-9]{${patternArray[0].length}}${divider}[0-9]{${patternArray[1].length}}${divider}[0-9]{${patternArray[2].length}}`;
        (_b = (_a = this.formGroupInput) === null || _a === void 0 ? void 0 : _a.get(this.formControlNameInput)) === null || _b === void 0 ? void 0 : _b.addValidators(Validators.pattern(validatePattern));
    }
    createStyle() {
        if (this.styleElement) {
            this.styleElement.removeChild(this.styleElement.firstChild);
        }
        else {
            this.styleElement = document.createElement('style');
        }
        if (this.styleSheet) {
            this.styleSheet = this.styleSheet
                .replace('}', `} #${this.formControlNameInput} `)
                .replace(',', `, #${this.formControlNameInput} `);
            this.styleSheet = `${stylesDefault} #${this.formControlNameInput}  ${this.styleSheet}`;
        }
        else {
            this.styleSheet = stylesDefault;
        }
        this.styleElement.appendChild(document.createTextNode(this.styleSheet));
        this.elementRef.nativeElement.appendChild(this.styleElement);
    }
    setFirstAndLastDay() {
        this.calendarMonthsService.firstDayOfSelectedMonth(this.calendarYearsService.selectedYear, this.calendarMonthsService.selectedMonth);
        this.calendarMonthsService.lastDayOfSelectedMonth(this.calendarYearsService.selectedYear, this.calendarMonthsService.selectedMonth);
    }
}
BmDatepickerLiteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: BmDatepickerLiteComponent, deps: [{ token: i0.ElementRef }, { token: CalendarYearsService }, { token: CalendarMonthsService }, { token: CalendarDaysService }], target: i0.ɵɵFactoryTarget.Component });
BmDatepickerLiteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: BmDatepickerLiteComponent, selector: "bm-datepicker-lite", inputs: { label: "label", styleSheet: "styleSheet", weekdays: "weekdays", months: "months", formGroupInput: "formGroupInput", formControlNameInput: "formControlNameInput", placeholder: "placeholder", pattern: "pattern" }, outputs: { calendarOutput: "calendarOutput" }, viewQueries: [{ propertyName: "bmDatePicker", first: true, predicate: ["bmDatePicker"], descendants: true }], ngImport: i0, template: "<div id=\"{{ formControlNameInput }}\">\n  <label for=\"bm-date-input\">{{ label }}</label>\n  <div class=\"bm-date-input-wrapper\">\n    <div *ngIf=\"!formGroupInput\" class=\"bm-date-input-wrapper\">\n      <input\n        #bmDatePicker\n        readonly\n        [pattern]=\"pattern\"\n        placeholder=\"{{ placeholder }}\"\n        class=\"bm-date-input bm-date-input-pointer\" />\n    </div>\n    <div\n      *ngIf=\"!!formGroupInput\"\n      [formGroup]=\"formGroupInput\"\n      class=\"bm-date-input-wrapper\">\n      <input\n        #bmDatePicker\n        readonly\n        formControlName=\"{{ formControlNameInput }}\"\n        placeholder=\"{{ placeholder }}\"\n        class=\"bm-date-input bm-date-input-pointer\" />\n    </div>\n    <div class=\"bm-toggle-button\" (click)=\"showDatePicker = !showDatePicker\">\n      <ng-content></ng-content>\n      <div class=\"bm-default-calendar bm-default-calendar-icon\">\n        <div class=\"upper-line\">\n          <div class=\"inner\"></div>\n          <div class=\"inner\"></div>\n        </div>\n        <div class=\"inner-line\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div [@toggleTable]=\"showDatePicker ? 'open' : 'close'\" class=\"bm-table\">\n    <div class=\"bm-tr\">\n      <div\n        *ngIf=\"\n          calendarYearsService.selectedYear ===\n            calendarYearsService.currentYear &&\n            calendarMonthsService.selectedMonth ===\n              calendarMonthsService.currentMonth;\n          else previousYearButton\n        \"\n        class=\"bm-td-empty-month\"></div>\n      <ng-template #previousYearButton>\n        <div class=\"bm-td\">\n          <div class=\"bm-td-inner\" (click)=\"selectPrevious()\">\n            <span class=\"bm-arrow bm-arrow-left\"></span>\n          </div>\n        </div>\n      </ng-template>\n      <div class=\"bm-year-month-title\">\n        <p class=\"bm-date-p bm-month-title\">\n          {{ calendarMonthsService.selectedMonthName }}\n        </p>\n        <p class=\"bm-date-p bm-year-title\">\n          {{ calendarYearsService.selectedYear }}\n        </p>\n      </div>\n      <div class=\"bm-td\">\n        <div class=\"bm-td-inner\" (click)=\"selectNext()\">\n          <span class=\"bm-arrow bm-arrow-right\"></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"bm-tr bm-daylabels-wrapper\">\n      <div\n        *ngFor=\"let weekdayLabel of calendarDaysService.dayLabels\"\n        class=\"bm-th\">\n        <p class=\"bm-date-p\">{{ weekdayLabel }}</p>\n      </div>\n    </div>\n    <div\n      *ngFor=\"let weekRow of calendarMonthsService.selectedMonthDaysArray\"\n      class=\"bm-tr\">\n      <div\n        *ngFor=\"let dayDate of weekRow; let dayIndex = index\"\n        [ngClass]=\"{\n          'bm-td': dayDate,\n          'bm-td-empty': !dayDate\n        }\">\n        <div\n          (click)=\"selectDay(dayDate)\"\n          [ngClass]=\"{\n            'bm-td-inner': dayDate,\n            'bm-td-inner-empty': !dayDate,\n            'bm-td-current-day':\n              calendarYearsService.selectedYear ===\n                calendarYearsService.currentYear &&\n              calendarMonthsService.selectedMonth ===\n                calendarMonthsService.currentMonth &&\n              dayDate &&\n              calendarDaysService.returnWeekdayDate(dayDate) ===\n                calendarDaysService.currentDay &&\n              calendarDaysService.selectedDay !==\n                calendarDaysService.returnWeekdayDate(dayDate),\n            'bm-td-before-day':\n              calendarYearsService.selectedYear ===\n                calendarYearsService.currentYear &&\n              calendarMonthsService.selectedMonth ===\n                calendarMonthsService.currentMonth &&\n              dayDate &&\n              calendarDaysService.returnWeekdayDate(dayDate) <\n                calendarDaysService.currentDay,\n            'bm-td-selected-day': dayDate && selectedDayDate(dayDate)\n          }\">\n          <p\n            class=\"bm-date-p\"\n            [class.bm-weekend]=\"dayDate && (dayIndex === 5 || dayIndex === 6)\">\n            {{ dayDate && calendarDaysService.returnWeekdayDate(dayDate) }}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".bm-default-calendar:not(:only-child){display:none;width:16px;height:16px}.bm-default-calendar-icon{width:14px;height:14px;border:.1rem solid #fff;border-radius:3px;box-sizing:border-box;display:flex;flex-direction:column}.bm-default-calendar-icon .upper-line{width:100%;height:.3rem;display:flex;flex-direction:row;justify-content:space-around}.bm-default-calendar-icon .upper-line .inner{height:.25rem;width:.1rem;background-color:#fff;margin-top:-.2rem}.bm-default-calendar-icon .inner-line{height:.1rem;width:100%;background-color:#fff;margin-top:-.1rem}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], animations: [
        trigger('toggleTable', [
            state('open', style({
                opacity: 1,
                marginTop: '10px'
            })),
            state('close', style({
                height: 0,
                padding: 0,
                opacity: 0,
                marginTop: 0
            })),
            transition('open <=> close', [animate('.2s ease-out')])
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: BmDatepickerLiteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bm-datepicker-lite', animations: [
                        trigger('toggleTable', [
                            state('open', style({
                                opacity: 1,
                                marginTop: '10px'
                            })),
                            state('close', style({
                                height: 0,
                                padding: 0,
                                opacity: 0,
                                marginTop: 0
                            })),
                            transition('open <=> close', [animate('.2s ease-out')])
                        ])
                    ], template: "<div id=\"{{ formControlNameInput }}\">\n  <label for=\"bm-date-input\">{{ label }}</label>\n  <div class=\"bm-date-input-wrapper\">\n    <div *ngIf=\"!formGroupInput\" class=\"bm-date-input-wrapper\">\n      <input\n        #bmDatePicker\n        readonly\n        [pattern]=\"pattern\"\n        placeholder=\"{{ placeholder }}\"\n        class=\"bm-date-input bm-date-input-pointer\" />\n    </div>\n    <div\n      *ngIf=\"!!formGroupInput\"\n      [formGroup]=\"formGroupInput\"\n      class=\"bm-date-input-wrapper\">\n      <input\n        #bmDatePicker\n        readonly\n        formControlName=\"{{ formControlNameInput }}\"\n        placeholder=\"{{ placeholder }}\"\n        class=\"bm-date-input bm-date-input-pointer\" />\n    </div>\n    <div class=\"bm-toggle-button\" (click)=\"showDatePicker = !showDatePicker\">\n      <ng-content></ng-content>\n      <div class=\"bm-default-calendar bm-default-calendar-icon\">\n        <div class=\"upper-line\">\n          <div class=\"inner\"></div>\n          <div class=\"inner\"></div>\n        </div>\n        <div class=\"inner-line\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div [@toggleTable]=\"showDatePicker ? 'open' : 'close'\" class=\"bm-table\">\n    <div class=\"bm-tr\">\n      <div\n        *ngIf=\"\n          calendarYearsService.selectedYear ===\n            calendarYearsService.currentYear &&\n            calendarMonthsService.selectedMonth ===\n              calendarMonthsService.currentMonth;\n          else previousYearButton\n        \"\n        class=\"bm-td-empty-month\"></div>\n      <ng-template #previousYearButton>\n        <div class=\"bm-td\">\n          <div class=\"bm-td-inner\" (click)=\"selectPrevious()\">\n            <span class=\"bm-arrow bm-arrow-left\"></span>\n          </div>\n        </div>\n      </ng-template>\n      <div class=\"bm-year-month-title\">\n        <p class=\"bm-date-p bm-month-title\">\n          {{ calendarMonthsService.selectedMonthName }}\n        </p>\n        <p class=\"bm-date-p bm-year-title\">\n          {{ calendarYearsService.selectedYear }}\n        </p>\n      </div>\n      <div class=\"bm-td\">\n        <div class=\"bm-td-inner\" (click)=\"selectNext()\">\n          <span class=\"bm-arrow bm-arrow-right\"></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"bm-tr bm-daylabels-wrapper\">\n      <div\n        *ngFor=\"let weekdayLabel of calendarDaysService.dayLabels\"\n        class=\"bm-th\">\n        <p class=\"bm-date-p\">{{ weekdayLabel }}</p>\n      </div>\n    </div>\n    <div\n      *ngFor=\"let weekRow of calendarMonthsService.selectedMonthDaysArray\"\n      class=\"bm-tr\">\n      <div\n        *ngFor=\"let dayDate of weekRow; let dayIndex = index\"\n        [ngClass]=\"{\n          'bm-td': dayDate,\n          'bm-td-empty': !dayDate\n        }\">\n        <div\n          (click)=\"selectDay(dayDate)\"\n          [ngClass]=\"{\n            'bm-td-inner': dayDate,\n            'bm-td-inner-empty': !dayDate,\n            'bm-td-current-day':\n              calendarYearsService.selectedYear ===\n                calendarYearsService.currentYear &&\n              calendarMonthsService.selectedMonth ===\n                calendarMonthsService.currentMonth &&\n              dayDate &&\n              calendarDaysService.returnWeekdayDate(dayDate) ===\n                calendarDaysService.currentDay &&\n              calendarDaysService.selectedDay !==\n                calendarDaysService.returnWeekdayDate(dayDate),\n            'bm-td-before-day':\n              calendarYearsService.selectedYear ===\n                calendarYearsService.currentYear &&\n              calendarMonthsService.selectedMonth ===\n                calendarMonthsService.currentMonth &&\n              dayDate &&\n              calendarDaysService.returnWeekdayDate(dayDate) <\n                calendarDaysService.currentDay,\n            'bm-td-selected-day': dayDate && selectedDayDate(dayDate)\n          }\">\n          <p\n            class=\"bm-date-p\"\n            [class.bm-weekend]=\"dayDate && (dayIndex === 5 || dayIndex === 6)\">\n            {{ dayDate && calendarDaysService.returnWeekdayDate(dayDate) }}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".bm-default-calendar:not(:only-child){display:none;width:16px;height:16px}.bm-default-calendar-icon{width:14px;height:14px;border:.1rem solid #fff;border-radius:3px;box-sizing:border-box;display:flex;flex-direction:column}.bm-default-calendar-icon .upper-line{width:100%;height:.3rem;display:flex;flex-direction:row;justify-content:space-around}.bm-default-calendar-icon .upper-line .inner{height:.25rem;width:.1rem;background-color:#fff;margin-top:-.2rem}.bm-default-calendar-icon .inner-line{height:.1rem;width:100%;background-color:#fff;margin-top:-.1rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: CalendarYearsService }, { type: CalendarMonthsService }, { type: CalendarDaysService }]; }, propDecorators: { bmDatePicker: [{
                type: ViewChild,
                args: ['bmDatePicker']
            }], label: [{
                type: Input
            }], styleSheet: [{
                type: Input
            }], weekdays: [{
                type: Input
            }], months: [{
                type: Input
            }], formGroupInput: [{
                type: Input
            }], formControlNameInput: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], pattern: [{
                type: Input
            }], calendarOutput: [{
                type: Output
            }] } });

class BmDatepickerLiteModule {
}
BmDatepickerLiteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: BmDatepickerLiteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BmDatepickerLiteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: BmDatepickerLiteModule, declarations: [BmDatepickerLiteComponent], imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule], exports: [BmDatepickerLiteComponent] });
BmDatepickerLiteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: BmDatepickerLiteModule, imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: BmDatepickerLiteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BmDatepickerLiteComponent],
                    imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule],
                    exports: [BmDatepickerLiteComponent]
                }]
        }] });

/*
 * Public API Surface of bm-datepicker-lite
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BmDatepickerLiteComponent, BmDatepickerLiteModule, CalendarDaysService, CalendarMonthsService, CalendarYearsService };
//# sourceMappingURL=bm-datepicker-lite.mjs.map
//# sourceMappingURL=bm-datepicker-lite.mjs.map
