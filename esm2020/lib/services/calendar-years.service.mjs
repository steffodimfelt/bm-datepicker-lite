import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CalendarYearsService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIteWVhcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JtLWRhdGVwaWNrZXItbGl0ZS9zcmMvbGliL3NlcnZpY2VzL2NhbGVuZGFyLXllYXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixnQkFBZSxDQUFDO0lBQ2hCLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxVQUFlO1FBQzFCLElBQUksQ0FBQyxhQUFhO1lBQ2hCLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ25FLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxVQUFlO1FBQzlCLElBQUksQ0FBQyxhQUFhO1lBQ2hCLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3BFLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxTQUFjO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxJQUFTO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNELGNBQWMsQ0FBQyxPQUFZO1FBQ3pCLE9BQU8sT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7O2lIQTdCVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQUZuQixVQUFVOzJGQUVYLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsVUFBVTtpQkFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3BsYXRmb3JtJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclllYXJzU2VydmljZSB7XG4gIF9jdXJyZW50WWVhcjogYW55O1xuICBfc2VsZWN0ZWRZZWFyOiBhbnk7XG4gIF95ZWFyOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgZ2V0IGN1cnJlbnRZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50WWVhcjtcbiAgfVxuICBnZXQgc2VsZWN0ZWRZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFllYXI7XG4gIH1cbiAgc2V0IG5leHRZZWFyKG1vbnRoVmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3NlbGVjdGVkWWVhciA9XG4gICAgICBtb250aFZhbHVlID09PSAwID8gdGhpcy5fc2VsZWN0ZWRZZWFyICsgMSA6IHRoaXMuX3NlbGVjdGVkWWVhcjtcbiAgfVxuICBzZXQgcHJldmlvdXNZZWFyKG1vbnRoVmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3NlbGVjdGVkWWVhciA9XG4gICAgICBtb250aFZhbHVlID09PSAxMSA/IHRoaXMuX3NlbGVjdGVkWWVhciAtIDEgOiB0aGlzLl9zZWxlY3RlZFllYXI7XG4gIH1cbiAgc2V0IHNlbGVjdGVkWWVhcih5ZWFyVmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3NlbGVjdGVkWWVhciA9IHllYXJWYWx1ZTtcbiAgfVxuICBzZXQgeWVhcihkYXRlOiBhbnkpIHtcbiAgICB0aGlzLl95ZWFyID0gZGF0ZTtcbiAgICB0aGlzLl9jdXJyZW50WWVhciA9IHRoaXMuX3llYXIuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSB0aGlzLl95ZWFyLmdldEZ1bGxZZWFyKCk7XG4gIH1cbiAgcmV0dXJuWWVhckRhdGUoZGF5SW5mbzogYW55KSB7XG4gICAgcmV0dXJuIGRheUluZm8uZ2V0RnVsbFllYXIoKTtcbiAgfVxufVxuIl19