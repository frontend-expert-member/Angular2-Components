import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatePickerDirective } from './datepicker';
import { BaseDatePickerComponent } from './baseDatepicker.component';

declare var $: any;

@Component({
    templateUrl: 'app/shared/datepicker/datepickerWithRange.component.html'
})
export class DatepickerWithRangeComponent extends BaseDatePickerComponent implements OnInit {
    public dateToDisplay: string;
    public date: Date = new Date();
    @ViewChild('inputTo') toInputField: ElementRef;
    @ViewChild('inputFrom') fromInputField: ElementRef;

    constructor(private datePipe: DatePipe,
        private el: ElementRef) {
        super();
        this.el = el.nativeElement;
    }
    ngOnInit() {
        let __this = this;
        let DateMin: Date;
        let to = $(this.toInputField.nativeElement);
        let from = $(this.fromInputField.nativeElement)
            .datepicker({
                numberOfMonths: this.noOfMonth,
                dateFormat: this.dateFormat,
                onSelect: function (dateText, inst) {
                    let date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);
                    console.log(date);
                    to.datepicker('option', 'minDate', date);
                }
            });

        to.datepicker({
            numberOfMonths: this.noOfMonth,
            dateFormat: this.dateFormat,
            onSelect: function (dateText, inst) {
                console.log(inst);
                let date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);
                console.log(date);
                from.datepicker('option', 'maxDate', date);
            }
        });
    }

    getDate(dateText, datepicker) {
        let date;
        try {
            date = datepicker.parseDate(this.dateFormat, dateText);
        } catch (error) {
            date = null;
        }
        return date;
    }
}
