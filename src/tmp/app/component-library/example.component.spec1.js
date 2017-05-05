"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var example_component_1 = require("./example.component");
var component_library_module_1 = require("./component-library.module");
describe('ExampleComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [example_component_1.ExampleComponent],
            imports: [component_library_module_1.ComponentLibraryModule],
        }).compileComponents(); // compile template and css for external templates and styles
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(example_component_1.ExampleComponent);
        comp = fixture.componentInstance; // ExampleComponent test instance
        de = fixture.debugElement;
        el = de.nativeElement;
    });
    it('ExampleComponent is Loaded', function () {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});

//# sourceMappingURL=example.component.spec1.js.map
