import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DetailsComponent } from './details.component';


describe('DetailsComponent', () => {

  let comp: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DetailsComponent ],
        }).compileComponents(); // compile template and css for external templates and styles
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsComponent);
        comp = fixture.componentInstance; // DetailsComponent test instance
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('DetailsComponent is Loaded', () => {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});
