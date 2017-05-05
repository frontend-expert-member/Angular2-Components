import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Timewidget24hrclockComponent } from './timewidget.24hrclock.component';


describe('Timewidget24hrclockComponent', () => {

  let comp: Timewidget24hrclockComponent;
  let fixture: ComponentFixture<Timewidget24hrclockComponent>;
  let de: DebugElement;
  let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Timewidget24hrclockComponent ],
        }).compileComponents(); // compile template and css for external templates and styles
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(Timewidget24hrclockComponent);
        comp = fixture.componentInstance; // Timewidget24hrclockComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('div'));
        el = de.nativeElement;
    });

    it('Timewidget24hrclockComponent is Loaded', () => {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});

