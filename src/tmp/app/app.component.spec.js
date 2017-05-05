"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/router/testing");
var testing_2 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var TestRouterComponent = (function () {
    function TestRouterComponent() {
    }
    return TestRouterComponent;
}());
TestRouterComponent = __decorate([
    core_1.Component({
        selector: 'dl-test-flight',
        template: '<div class="title">Hello test</div>'
    })
], TestRouterComponent);
var config = [
    {
        path: '', component: TestRouterComponent
    }
];
describe('AppComponent', function () {
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                app_component_1.AppComponent
            ],
            imports: [testing_1.RouterTestingModule, router_1.RouterModule],
            providers: [router_1.provideRoutes(config)]
        });
    });
    // it('should have title Hello world', async(() => {
    //     TestBed.compileComponents().then(() => {
    //         let fixture: ComponentFixture<AppComponent>;
    //         fixture = TestBed.createComponent(AppComponent);
    //         fixture.detectChanges();
    //         let compiled = fixture.debugElement.nativeElement;
    //         expect(compiled).toBeDefined();
    //     });
    // }));
});

//# sourceMappingURL=app.component.spec.js.map
