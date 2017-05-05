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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var index_1 = require("./header/index");
var timewidget_module_1 = require("./timewidget/timewidget.module");
var datepicker_module_1 = require("./datepicker/datepicker.module");
var calculator_module_1 = require("./calculator/calculator.module");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, timewidget_module_1.TimeModule, datepicker_module_1.DatepickerModule, calculator_module_1.CalculatorModule],
        declarations: [],
        exports: [index_1.HeaderModule, timewidget_module_1.TimeModule, datepicker_module_1.DatepickerModule, calculator_module_1.CalculatorModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;

//# sourceMappingURL=shared.module.js.map
