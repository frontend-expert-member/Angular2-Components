"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datepickerWithButtons_component_1 = require("./datepickerWithButtons.component");
var datepickerWithTextbox_component_1 = require("./datepickerWithTextbox.component");
var datepickerWithRange_component_1 = require("./datepickerWithRange.component");
var common_1 = require("@angular/common");
var datepicker_1 = require("./datepicker");
var forms_1 = require("@angular/forms");
var common_2 = require("@angular/common");
var DatepickerModule = (function () {
    function DatepickerModule() {
    }
    return DatepickerModule;
}());
DatepickerModule = __decorate([
    core_1.NgModule({
        declarations: [
            datepicker_1.DatePickerDirective,
            datepickerWithButtons_component_1.DatepickerWithButtonsComponent,
            datepickerWithTextbox_component_1.DatepickerWithTextboxComponent,
            datepickerWithRange_component_1.DatepickerWithRangeComponent
        ],
        imports: [common_1.CommonModule, forms_1.FormsModule],
        exports: [
            datepicker_1.DatePickerDirective,
            datepickerWithButtons_component_1.DatepickerWithButtonsComponent,
            datepickerWithTextbox_component_1.DatepickerWithTextboxComponent,
            datepickerWithRange_component_1.DatepickerWithRangeComponent
        ],
        entryComponents: [datepickerWithButtons_component_1.DatepickerWithButtonsComponent, datepickerWithTextbox_component_1.DatepickerWithTextboxComponent, datepickerWithRange_component_1.DatepickerWithRangeComponent],
        providers: [common_2.DatePipe]
    })
], DatepickerModule);
exports.DatepickerModule = DatepickerModule;

//# sourceMappingURL=datepicker.module.js.map
