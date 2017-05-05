"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// our root app component
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timewidget_basic_component_1 = require("./timewidget.basic.component");
var timewidget_24hrclock_component_1 = require("./timewidget.24hrclock.component");
var timewidget_hrsandminutes_component_1 = require("./timewidget.hrsandminutes.component");
var timewidget_directive_1 = require("./timewidget.directive");
var TimeModule = (function () {
    function TimeModule() {
    }
    return TimeModule;
}());
TimeModule = __decorate([
    core_1.NgModule({
        declarations: [timewidget_basic_component_1.TimeWidgetBasicComponent, timewidget_24hrclock_component_1.Timewidget24hrclockComponent, timewidget_hrsandminutes_component_1.TimeWidgetHoursAndMinuteComponent, timewidget_directive_1.TimeWidgetDirective],
        exports: [timewidget_basic_component_1.TimeWidgetBasicComponent, timewidget_24hrclock_component_1.Timewidget24hrclockComponent, timewidget_hrsandminutes_component_1.TimeWidgetHoursAndMinuteComponent, timewidget_directive_1.TimeWidgetDirective],
        imports: [common_1.CommonModule],
        entryComponents: [timewidget_basic_component_1.TimeWidgetBasicComponent, timewidget_24hrclock_component_1.Timewidget24hrclockComponent, timewidget_hrsandminutes_component_1.TimeWidgetHoursAndMinuteComponent]
    })
], TimeModule);
exports.TimeModule = TimeModule;

//# sourceMappingURL=timewidget.module.js.map
