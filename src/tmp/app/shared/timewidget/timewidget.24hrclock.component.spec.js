"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var timewidget_24hrclock_component_1 = require("./timewidget.24hrclock.component");
describe('Timewidget24hrclockComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [timewidget_24hrclock_component_1.Timewidget24hrclockComponent],
        }).compileComponents(); // compile template and css for external templates and styles
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(timewidget_24hrclock_component_1.Timewidget24hrclockComponent);
        comp = fixture.componentInstance; // Timewidget24hrclockComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('div'));
        el = de.nativeElement;
    });
    it('Timewidget24hrclockComponent is Loaded', function () {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});

//# sourceMappingURL=timewidget.24hrclock.component.spec.js.map
