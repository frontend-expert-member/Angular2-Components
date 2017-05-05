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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basetimewidget_component_1 = require("./basetimewidget.component");
var TimeWidgetHoursAndMinuteComponent = (function (_super) {
    __extends(TimeWidgetHoursAndMinuteComponent, _super);
    function TimeWidgetHoursAndMinuteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedHrs = new Hrs('12');
        _this.hourList = [
            new Hrs('12'),
            new Hrs('1'),
            new Hrs('2'),
            new Hrs('3'),
            new Hrs('4'),
            new Hrs('5'),
            new Hrs('6'),
            new Hrs('7'),
            new Hrs('8'),
            new Hrs('9'),
            new Hrs('10'),
            new Hrs('11'),
        ];
        _this.selectedMin = new Min('00');
        _this.MinList = [
            new Min('00'),
            new Min('15'),
            new Min('30'),
            new Min('45'),
        ];
        _this.selectedPeriod = new Period('am');
        _this.timePeriodList = [
            new Period('am'),
            new Period('pm'),
        ];
        return _this;
    }
    return TimeWidgetHoursAndMinuteComponent;
}(basetimewidget_component_1.BaseTimeWidgetComponent));
TimeWidgetHoursAndMinuteComponent = __decorate([
    core_1.Component({
        selector: 'dl-timewidget-hours-and-minute',
        templateUrl: 'app/shared/timewidget/timewidget.hrsandminutes.component.html'
    })
], TimeWidgetHoursAndMinuteComponent);
exports.TimeWidgetHoursAndMinuteComponent = TimeWidgetHoursAndMinuteComponent;
var Hrs = (function () {
    function Hrs(currentHour) {
        this.currentHour = currentHour;
    }
    return Hrs;
}());
var Min = (function () {
    function Min(currentMin) {
        this.currentMin = currentMin;
    }
    return Min;
}());
var Period = (function () {
    function Period(currenttimePeriod) {
        this.currenttimePeriod = currenttimePeriod;
    }
    return Period;
}());

//# sourceMappingURL=timewidget.hrsandminutes.component.js.map
