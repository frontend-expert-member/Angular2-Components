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
var DatepickerWithRangeComponent = (function (_super) {
    __extends(DatepickerWithRangeComponent, _super);
    function DatepickerWithRangeComponent(datePipe, el) {
        var _this = _super.call(this) || this;
        _this.datePipe = datePipe;
        _this.el = el;
        _this.date = new Date();
        _this.el = el.nativeElement;
        return _this;
    }
    DatepickerWithRangeComponent.prototype.ngOnInit = function () {
        var __this = this;
        var DateMin;
        var to = $(this.toInputField.nativeElement);
        var from = $(this.fromInputField.nativeElement)
            .datepicker({
            numberOfMonths: this.noOfMonth,
            dateFormat: this.dateFormat,
            onSelect: function (dateText, inst) {
                var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);
                console.log(date);
                to.datepicker('option', 'minDate', date);
            }
        });
        to.datepicker({
            numberOfMonths: this.noOfMonth,
            dateFormat: this.dateFormat,
            onSelect: function (dateText, inst) {
                console.log(inst);
                var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);
                console.log(date);
                from.datepicker('option', 'maxDate', date);
            }
        });
    };
    DatepickerWithRangeComponent.prototype.getDate = function (dateText, datepicker) {
        var date;
        try {
            date = datepicker.parseDate(this.dateFormat, dateText);
        }
        catch (error) {
            date = null;
        }
        return date;
    };
    return DatepickerWithRangeComponent;
}(baseDatepicker_component_1.BaseDatePickerComponent));
__decorate([
    core_1.ViewChild('inputTo'),
    __metadata("design:type", core_1.ElementRef)
], DatepickerWithRangeComponent.prototype, "toInputField", void 0);
__decorate([
    core_1.ViewChild('inputFrom'),
    __metadata("design:type", core_1.ElementRef)
], DatepickerWithRangeComponent.prototype, "fromInputField", void 0);
DatepickerWithRangeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/shared/datepicker/datepickerWithRange.component.html'
    }),
    __metadata("design:paramtypes", [common_1.DatePipe,
        core_1.ElementRef])
], DatepickerWithRangeComponent);
exports.DatepickerWithRangeComponent = DatepickerWithRangeComponent;

//# sourceMappingURL=datepickerWithRange.component.js.map
