import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {

  let comp: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let de: DebugElement;
  let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CalculatorComponent ],
            imports: [ FormsModule ],
        }).compileComponents();
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorComponent);
        comp = fixture.componentInstance; // CalculatorComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('CalculatorComponent is Loaded', () => {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });

     it('CalculatorComponent evaluating 123+456*965-741', () => {
        comp.calcButtonPress('1');
        comp.calcButtonPress('2');
        comp.calcButtonPress('3');
        comp.calcButtonPress('+');
        comp.calcButtonPress('4');
        comp.calcButtonPress('5');
        comp.calcButtonPress('6');
        comp.calcButtonPress('*');
        comp.calcButtonPress('9');
        comp.calcButtonPress('6');
        comp.calcButtonPress('5');
        comp.calcButtonPress('-');
        comp.calcButtonPress('7');
        comp.calcButtonPress('4');
        comp.calcButtonPress('1');
        comp.evaluate();
        fixture.detectChanges();
        expect(comp.lcdValue).toEqual('439422');
    });
});


