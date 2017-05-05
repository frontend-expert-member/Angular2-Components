"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var common_1 = require("@angular/common");
var ngx_bootstrap_3 = require("ngx-bootstrap");
var ngx_bootstrap_4 = require("ngx-bootstrap");
var datepicker_module_1 = require("../shared/datepicker/datepicker.module");
var timewidget_module_1 = require("../shared/timewidget/timewidget.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.HomeComponent
        ],
        exports: [
            index_1.HomeComponent
        ],
        imports: [
            ngx_bootstrap_1.AlertModule.forRoot(),
            common_1.CommonModule,
            ngx_bootstrap_2.AccordionModule.forRoot(),
            ngx_bootstrap_3.ModalModule.forRoot(),
            ngx_bootstrap_4.TooltipModule.forRoot(),
            datepicker_module_1.DatepickerModule,
            timewidget_module_1.TimeModule
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;

//# sourceMappingURL=home.module.js.map
