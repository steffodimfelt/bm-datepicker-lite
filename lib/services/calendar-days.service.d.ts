import * as i0 from "@angular/core";
export declare class CalendarDaysService {
    _currentDay: any;
    _selectedDay: any;
    _dayLabels: any;
    constructor();
    get currentDay(): any;
    get selectedDay(): any;
    get dayLabels(): any;
    set day(date: any);
    set selectedDay(dayValue: any);
    set dayLabels(weekdays: any);
    returnWeekdayDate(dayInfo: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarDaysService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalendarDaysService>;
}
