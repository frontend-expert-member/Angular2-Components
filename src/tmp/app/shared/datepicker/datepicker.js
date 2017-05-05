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
var common_1 = require("@angular/common");
var datepickerWithButtons_component_1 = require("./datepickerWithButtons.component");
var datepickerWithTextbox_component_1 = require("./datepickerWithTextbox.component");
var datepickerWithRange_component_1 = require("./datepickerWithRange.component");
var DatePickerDirective = (function () {
    function DatePickerDirective(viewContainer, componentFactoryResolver, el, datePipe) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.el = el;
        this.datePipe = datePipe;
        this.date = new Date();
        this.dateToDisplay = this.datePipe.transform(this.date, 'dMMM');
    }
    DatePickerDirective.prototype.ngOnInit = function () {
        var __this = this;
        if (this.dateconfig.type === 'withButtons') {
            this.createDatePicker(datepickerWithButtons_component_1.DatepickerWithButtonsComponent);
        }
        else if (this.dateconfig.type === 'withText') {
            this.createDatePicker(datepickerWithTextbox_component_1.DatepickerWithTextboxComponent);
        }
        else {
            this.createDatePicker(datepickerWithRange_component_1.DatepickerWithRangeComponent);
        }
    };
    DatePickerDirective.prototype.createDatePicker = function (datepickerComponent) {
        var datepickerComponentRef;
        var datepickerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(datepickerComponent);
        datepickerComponentRef = this.viewContainer.createComponent(datepickerComponentFactory);
        datepickerComponentRef.instance.maxDate = this.dateconfig.maxDate;
        datepickerComponentRef.instance.minDate = this.dateconfig.minDate;
        datepickerComponentRef.instance.noOfMonth = this.dateconfig.noOfMonth;
        datepickerComponentRef.instance.dateFormat = this.dateconfig.dateFormat;
        return datepickerComponentRef;
    };
    return DatePickerDirective;
}());
__decorate([
    core_1.Input('dateconfig'),
    __metadata("design:type", Object)
], DatePickerDirective.prototype, "dateconfig", void 0);
DatePickerDirective = __decorate([
    core_1.Directive({
        selector: '[dl-datepicker]',
        providers: [common_1.DatePipe],
        exportAs: 'datepickerDirective'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        core_1.ComponentFactoryResolver,
        core_1.ElementRef, common_1.DatePipe])
], DatePickerDirective);
exports.DatePickerDirective = DatePickerDirective;

//# sourceMappingURL=datepicker.js.map
