import { NgModule } from '@angular/core';
import { DatepickerWithButtonsComponent } from './datepickerWithButtons.component';
import { DatepickerWithTextboxComponent } from './datepickerWithTextbox.component';
import { DatepickerWithRangeComponent } from './datepickerWithRange.component';
import { CommonModule } from '@angular/common';
import { DatePickerDirective } from './datepicker';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        DatePickerDirective,
        DatepickerWithButtonsComponent,
        DatepickerWithTextboxComponent,
        DatepickerWithRangeComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [
        DatePickerDirective,
        DatepickerWithButtonsComponent,
        DatepickerWithTextboxComponent,
        DatepickerWithRangeComponent
    ],
    entryComponents: [DatepickerWithButtonsComponent, DatepickerWithTextboxComponent, DatepickerWithRangeComponent],
    providers: [DatePipe]
})
export class DatepickerModule {
}
