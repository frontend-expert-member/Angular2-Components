"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var timewidget_basic_component_1 = require("./timewidget.basic.component");
describe('TimeWidgetBasicComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [timewidget_basic_component_1.TimeWidgetBasicComponent],
        }).compileComponents(); // compile template and css for external templates and styles
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(timewidget_basic_component_1.TimeWidgetBasicComponent);
        comp = fixture.componentInstance; // TimeWidgetBasicComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('label'));
        el = de.nativeElement;
    });
    it('TimeWidgetBasicComponent is Loaded', function () {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});

//# sourceMappingURL=timewidget.basic.component.spec.js.map
