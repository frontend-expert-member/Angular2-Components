"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var timewidget_hrsandminutes_component_1 = require("./timewidget.hrsandminutes.component");
describe('TimeWidgetHoursAndMinuteComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [timewidget_hrsandminutes_component_1.TimeWidgetHoursAndMinuteComponent],
        }).compileComponents(); // compile template and css for external templates and styles
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(timewidget_hrsandminutes_component_1.TimeWidgetHoursAndMinuteComponent);
        comp = fixture.componentInstance; // TimeWidgetHoursAndMinuteComponent test instance
        de = fixture.debugElement;
        el = de.nativeElement;
    });
    it('TimeWidgetHoursAndMinuteComponent is Loaded', function () {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});

//# sourceMappingURL=timewidget.hrsandminutes.component.spec.js.map
