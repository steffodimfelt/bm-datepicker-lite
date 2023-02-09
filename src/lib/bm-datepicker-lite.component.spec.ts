import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BmDatepickerLiteComponent } from './bm-datepicker-lite.component';

describe('BmDatepickerLiteComponent', () => {
  let component: BmDatepickerLiteComponent;
  let fixture: ComponentFixture<BmDatepickerLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmDatepickerLiteComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BmDatepickerLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
