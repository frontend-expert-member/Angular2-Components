"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var details_component_1 = require("./details.component");
describe('DetailsComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [details_component_1.DetailsComponent],
        }).compileComponents(); // compile template and css for external templates and styles
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(details_component_1.DetailsComponent);
        comp = fixture.componentInstance; // DetailsComponent test instance
        de = fixture.debugElement;
        el = de.nativeElement;
    });
    it('DetailsComponent is Loaded', function () {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});

//# sourceMappingURL=details.component.spec1.js.map
