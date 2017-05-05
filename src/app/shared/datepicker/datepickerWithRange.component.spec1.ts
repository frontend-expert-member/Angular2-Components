import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DatepickerWithRangeComponent } from './datepickerWithRange.component';
import { CommonModule } from '@angular/common';
import { DatePickerDirective } from './datepicker';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

describe('DatepickerWithRangeComponent', () => {

  let comp: DatepickerWithRangeComponent;
  let fixture: ComponentFixture<DatepickerWithRangeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DatepickerWithRangeComponent, DatePickerDirective ],
            imports: [CommonModule, FormsModule],
            providers: [DatePipe],
        }).compileComponents(); // compile template and css for external templates and styles
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(DatepickerWithRangeComponent);
        comp = fixture.componentInstance; // DatepickerWithRangeComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('DatepickerWithRangeComponent is Loaded', () => {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});
