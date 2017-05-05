"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var component_library_component_1 = require("./component-library.component");
var details_component_1 = require("./details.component");
var component_library_service_1 = require("./component-library.service");
var shared_module_1 = require("../shared/shared.module");
var example_component_1 = require("./example.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var ngx_bootstrap_3 = require("ngx-bootstrap");
var ngx_bootstrap_4 = require("ngx-bootstrap");
var filter_1 = require("./filter");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_5 = require("ngx-bootstrap");
var ComponentLibraryModule = (function () {
    function ComponentLibraryModule() {
    }
    return ComponentLibraryModule;
}());
ComponentLibraryModule = __decorate([
    core_1.NgModule({
        declarations: [
            component_library_component_1.ComponentLibraryComponent,
            details_component_1.DetailsComponent,
            example_component_1.ExampleComponent, filter_1.Filter
        ],
        exports: [
            component_library_component_1.ComponentLibraryComponent,
            details_component_1.DetailsComponent,
            example_component_1.ExampleComponent
        ],
        imports: [common_1.CommonModule, shared_module_1.SharedModule, ngx_bootstrap_1.AlertModule.forRoot(),
            ngx_bootstrap_2.AccordionModule.forRoot(),
            ngx_bootstrap_3.ModalModule.forRoot(),
            ngx_bootstrap_4.TooltipModule.forRoot(),
            forms_1.FormsModule,
            ngx_bootstrap_5.TypeaheadModule.forRoot()
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [component_library_service_1.ComponentLibraryServices]
    })
], ComponentLibraryModule);
exports.ComponentLibraryModule = ComponentLibraryModule;

//# sourceMappingURL=component-library.module.js.map
