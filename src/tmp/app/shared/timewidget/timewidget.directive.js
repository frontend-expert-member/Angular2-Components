"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timewidget_basic_component_1 = require("./timewidget.basic.component");
var timewidget_24hrclock_component_1 = require("./timewidget.24hrclock.component");
var timewidget_hrsandminutes_component_1 = require("./timewidget.hrsandminutes.component");
var TimeWidgetDirective = (function () {
    function TimeWidgetDirective(viewContainer, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    TimeWidgetDirective.prototype.ngOnInit = function () {
        if (this.type === '24hrs') {
            this.createTimeWidget(timewidget_24hrclock_component_1.Timewidget24hrclockComponent);
        }
        else if (this.type === 'hrsandMin') {
            this.createTimeWidget(timewidget_hrsandminutes_component_1.TimeWidgetHoursAndMinuteComponent);
        }
        else if (this.type === 'basic') {
            this.createTimeWidget(timewidget_basic_component_1.TimeWidgetBasicComponent);
        }
    };
    TimeWidgetDirective.prototype.createTimeWidget = function (dialogComponent) {
        var dialogComponentRef;
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        return dialogComponentRef;
    };
    return TimeWidgetDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TimeWidgetDirective.prototype, "type", void 0);
TimeWidgetDirective = __decorate([
    core_1.Directive({
        selector: '[dl-timewidget]',
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
], TimeWidgetDirective);
exports.TimeWidgetDirective = TimeWidgetDirective;

//# sourceMappingURL=timewidget.directive.js.map
