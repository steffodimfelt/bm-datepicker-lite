import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BmDatepickerLiteComponent } from './bm-datepicker-lite.component';

@NgModule({
  declarations: [BmDatepickerLiteComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule],
  exports: [BmDatepickerLiteComponent]
})
export class BmDatepickerLiteModule {}
