import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { TimeWidgetBasicComponent } from './timewidget.basic.component';


describe('TimeWidgetBasicComponent', () => {

  let comp: TimeWidgetBasicComponent;
  let fixture: ComponentFixture<TimeWidgetBasicComponent>;
  let de: DebugElement;
  let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TimeWidgetBasicComponent ],
        }).compileComponents(); // compile template and css for external templates and styles
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(TimeWidgetBasicComponent);
        comp = fixture.componentInstance; // TimeWidgetBasicComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('label'));
        el = de.nativeElement;
    });

    it('TimeWidgetBasicComponent is Loaded', () => {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});


