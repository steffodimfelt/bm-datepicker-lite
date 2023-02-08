import * as i0 from "@angular/core";
export declare class CalendarYearsService {
    _currentYear: any;
    _selectedYear: any;
    _year: any;
    constructor();
    get currentYear(): any;
    get selectedYear(): any;
    set nextYear(monthValue: any);
    set previousYear(monthValue: any);
    set selectedYear(yearValue: any);
    set year(date: any);
    returnYearDate(dayInfo: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarYearsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalendarYearsService>;
}
