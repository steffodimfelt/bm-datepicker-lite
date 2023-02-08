import * as i0 from "@angular/core";
export declare class CalendarMonthsService {
    _date: any;
    _currentMonth: any;
    _selectedMonth: any;
    _selectedYear: any;
    _monthLabels: any;
    _firstDayOfSelectedMonth: any;
    _lastDayOfSelectedMonth: any;
    _yearAltered: number;
    constructor();
    get currentMonth(): any;
    get selectedMonth(): any;
    get selectedMonthName(): any;
    get selectedMonthDays(): number;
    get emptyDaysAtBeginning(): null[];
    get selectedMonthDaysArray(): any;
    set month(date: any);
    set monthLabels(monthLabels: any);
    firstDayOfSelectedMonth(selectedYear: any, selectedMonth: any): void;
    lastDayOfSelectedMonth(selectedYear: any, selectedMonth: any): void;
    formatToWeekArray: (datesArray: any) => any;
    nextMonth(): void;
    previousMonth(): void;
    set selectedMonth(monthValue: any);
    returnMonthDate(dayInfo: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarMonthsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalendarMonthsService>;
}
