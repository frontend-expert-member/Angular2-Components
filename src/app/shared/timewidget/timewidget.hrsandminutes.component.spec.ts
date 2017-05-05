import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { TimeWidgetHoursAndMinuteComponent } from './timewidget.hrsandminutes.component';


describe('TimeWidgetHoursAndMinuteComponent', () => {

  let comp: TimeWidgetHoursAndMinuteComponent;
  let fixture: ComponentFixture<TimeWidgetHoursAndMinuteComponent>;
  let de: DebugElement;
  let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TimeWidgetHoursAndMinuteComponent ],
        }).compileComponents(); // compile template and css for external templates and styles
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(TimeWidgetHoursAndMinuteComponent);
        comp = fixture.componentInstance; // TimeWidgetHoursAndMinuteComponent test instance
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('TimeWidgetHoursAndMinuteComponent is Loaded', () => {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});
