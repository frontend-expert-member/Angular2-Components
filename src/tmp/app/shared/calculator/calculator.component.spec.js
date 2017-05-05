"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var calculator_component_1 = require("./calculator.component");
var forms_1 = require("@angular/forms");
describe('CalculatorComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [calculator_component_1.CalculatorComponent],
            imports: [forms_1.FormsModule],
        }).compileComponents();
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(calculator_component_1.CalculatorComponent);
        comp = fixture.componentInstance; // CalculatorComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement;
        el = de.nativeElement;
    });
    it('CalculatorComponent is Loaded', function () {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
    it('CalculatorComponent evaluating 123+456*965-741', function () {
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

//# sourceMappingURL=calculator.component.spec.js.map
