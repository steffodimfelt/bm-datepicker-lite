import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CalendarDaysService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm0tZGF0ZXBpY2tlci1saXRlL3NyYy9saWIvc2VydmljZXMvY2FsZW5kYXItZGF5cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFLOUIsZ0JBQWUsQ0FBQztJQUNoQixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFTO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxRQUFRO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFhO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFZO1FBQzVCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dIQTdCVSxtQkFBbUI7b0hBQW5CLG1CQUFtQixjQUZsQixVQUFVOzJGQUVYLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsVUFBVTtpQkFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3BsYXRmb3JtJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRheXNTZXJ2aWNlIHtcbiAgX2N1cnJlbnREYXk6IGFueTtcbiAgX3NlbGVjdGVkRGF5OiBhbnk7XG4gIF9kYXlMYWJlbHM6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGdldCBjdXJyZW50RGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50RGF5O1xuICB9XG4gIGdldCBzZWxlY3RlZERheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWREYXk7XG4gIH1cbiAgZ2V0IGRheUxhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF5TGFiZWxzO1xuICB9XG4gIHNldCBkYXkoZGF0ZTogYW55KSB7XG4gICAgdGhpcy5fY3VycmVudERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHRoaXMuX3NlbGVjdGVkRGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgdGhpcy5fZGF5TGFiZWxzID0gWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnLCAnU3VuJ107XG4gIH1cbiAgc2V0IHNlbGVjdGVkRGF5KGRheVZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWREYXkgPSBkYXlWYWx1ZTtcbiAgfVxuICBzZXQgZGF5TGFiZWxzKHdlZWtkYXlzOiBhbnkpIHtcbiAgICB0aGlzLl9kYXlMYWJlbHMgPSB3ZWVrZGF5cztcbiAgfVxuXG4gIHJldHVybldlZWtkYXlEYXRlKGRheUluZm86IGFueSkge1xuICAgIHJldHVybiBkYXlJbmZvLmdldERhdGUoKTtcbiAgfVxufVxuIl19