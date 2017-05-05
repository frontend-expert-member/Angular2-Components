import {
    Directive, ElementRef, OnInit, Input, ComponentFactoryResolver,
    ComponentRef, ViewContainerRef
} from '@angular/core';
import { BaseDatePickerComponent } from './basedatepicker.component';
import { DatePipe } from '@angular/common';
import { DatepickerWithButtonsComponent } from './datepickerWithButtons.component';
import { DatepickerWithTextboxComponent } from './datepickerWithTextbox.component';
import { DatepickerWithRangeComponent } from './datepickerWithRange.component';

declare var $: any;
@Directive({
    selector: '[dl-datepicker]',
    providers: [DatePipe],
    exportAs: 'datepickerDirective'
})

export class DatePickerDirective implements OnInit {
    public date: Date = new Date();
    public dateToDisplay: string;
    @Input('dateconfig') dateconfig: { type: string, maxDate: string, minDate: string, noOfMonth: string , dateFormat: string};
    constructor(
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private el: ElementRef, private datePipe: DatePipe) {
        this.dateToDisplay = this.datePipe.transform(this.date, 'dMMM');
    }

    ngOnInit() {
        let __this = this;
        if (this.dateconfig.type === 'withButtons') {
            this.createDatePicker(DatepickerWithButtonsComponent);
        } else if (this.dateconfig.type === 'withText') {
            this.createDatePicker(DatepickerWithTextboxComponent);
        } else {
            this.createDatePicker(DatepickerWithRangeComponent);
        }
    }
    createDatePicker(datepickerComponent:
        {
            new (datePipe: DatePipe,
                el: ElementRef):
                BaseDatePickerComponent
        }): ComponentRef<BaseDatePickerComponent> {
        let datepickerComponentRef;
        let datepickerComponentFactory =
            this.componentFactoryResolver.resolveComponentFactory(datepickerComponent);
        datepickerComponentRef = this.viewContainer.createComponent(datepickerComponentFactory);
        datepickerComponentRef.instance.maxDate = this.dateconfig.maxDate;
        datepickerComponentRef.instance.minDate = this.dateconfig.minDate;
        datepickerComponentRef.instance.noOfMonth = this.dateconfig.noOfMonth;
        datepickerComponentRef.instance.dateFormat = this.dateconfig.dateFormat;
        return datepickerComponentRef;
    }
}
