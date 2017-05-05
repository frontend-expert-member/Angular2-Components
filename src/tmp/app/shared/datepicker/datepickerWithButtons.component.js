"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var baseDatepicker_component_1 = require("./baseDatepicker.component");
var DatepickerWithButtonsComponent = (function (_super) {
    __extends(DatepickerWithButtonsComponent, _super);
    function DatepickerWithButtonsComponent(datePipe, el) {
        var _this = _super.call(this) || this;
        _this.datePipe = datePipe;
        _this.el = el;
        _this.date = new Date();
        _this.dateToDisplay = _this.datePipe.transform(_this.date, 'dMMM');
        return _this;
    }
    DatepickerWithButtonsComponent.prototype.minusClick = function () {
        this.date.setDate(this.date.getDate() - 1);
        this.dateToDisplay = this.datePipe.transform(this.date, 'dMMM');
    };
    DatepickerWithButtonsComponent.prototype.pluseClick = function () {
        this.date.setDate(this.date.getDate() + 1);
        this.dateToDisplay = this.datePipe.transform(this.date, 'dMMM');
    };
    DatepickerWithButtonsComponent.prototype.ngOnInit = function () {
        var __this = this;
        var datepicker = $(this.inputField.nativeElement).datepicker({
            numberOfMonths: this.noOfMonth,
            showOn: 'button',
            buttonImage: 'https://jqueryui.com/resources/demos/datepicker/images/calendar.gif',
            dateFormat: this.dateFormat,
            minDate: this.minDate,
            maxDate: this.maxDate
        });
    };
    return DatepickerWithButtonsComponent;
}(baseDatepicker_component_1.BaseDatePickerComponent));
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], DatepickerWithButtonsComponent.prototype, "inputField", void 0);
DatepickerWithButtonsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/shared/datepicker/datepickerWithButtons.component.html',
        providers: [common_1.DatePipe]
    }),
    __metadata("design:paramtypes", [common_1.DatePipe,
        core_1.ElementRef])
], DatepickerWithButtonsComponent);
exports.DatepickerWithButtonsComponent = DatepickerWithButtonsComponent;

//# sourceMappingURL=datepickerWithButtons.component.js.map
