"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var datepickerWithRange_component_1 = require("./datepickerWithRange.component");
var common_1 = require("@angular/common");
var datepicker_1 = require("./datepicker");
var forms_1 = require("@angular/forms");
var common_2 = require("@angular/common");
describe('DatepickerWithRangeComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [datepickerWithRange_component_1.DatepickerWithRangeComponent, datepicker_1.DatePickerDirective],
            imports: [common_1.CommonModule, forms_1.FormsModule],
            providers: [common_2.DatePipe],
        }).compileComponents(); // compile template and css for external templates and styles
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(datepickerWithRange_component_1.DatepickerWithRangeComponent);
        comp = fixture.componentInstance; // DatepickerWithRangeComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement;
        el = de.nativeElement;
    });
    it('DatepickerWithRangeComponent is Loaded', function () {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});

//# sourceMappingURL=datepickerWithRange.component.spec1.js.map
