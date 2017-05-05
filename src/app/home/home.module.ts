import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { DatepickerModule } from '../shared/datepicker/datepicker.module';
import { TimeModule } from '../shared/timewidget/timewidget.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        AlertModule.forRoot(),
        CommonModule,
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        DatepickerModule,
        TimeModule
    ]
})
export class HomeModule {
}
