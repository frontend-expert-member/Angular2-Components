import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatePickerDirective } from './datepicker';
import { BaseDatePickerComponent } from './baseDatepicker.component';

declare var $: any;
@Component({
    templateUrl: 'app/shared/datepicker/datepickerWithButtons.component.html',
    providers: [DatePipe]
})
export class DatepickerWithButtonsComponent extends BaseDatePickerComponent implements OnInit {
    public dateToDisplay: string;
    public date: Date = new Date();
    @ViewChild('input') inputField: ElementRef;

    constructor(private datePipe: DatePipe,
        private el: ElementRef) {
        super();
        this.dateToDisplay = this.datePipe.transform(this.date, 'dMMM');
    }

    minusClick() {
        this.date.setDate(this.date.getDate() - 1);
        this.dateToDisplay = this.datePipe.transform(this.date, 'dMMM');
    }

    pluseClick() {
        this.date.setDate(this.date.getDate() + 1);
        this.dateToDisplay = this.datePipe.transform(this.date, 'dMMM');
    }
    ngOnInit() {
        let __this = this;
         let datepicker = $(this.inputField.nativeElement).datepicker({
            numberOfMonths: this.noOfMonth,
            showOn: 'button',
            buttonImage: 'https://jqueryui.com/resources/demos/datepicker/images/calendar.gif',
            dateFormat: this.dateFormat,
            minDate: this.minDate,
            maxDate: this.maxDate
        });
    }
}
