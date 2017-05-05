import { Directive, OnInit, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { BaseTimeWidgetComponent } from './basetimewidget.component';
import { TimeWidgetBasicComponent } from './timewidget.basic.component';
import { Timewidget24hrclockComponent } from './timewidget.24hrclock.component';
import { TimeWidgetHoursAndMinuteComponent } from './timewidget.hrsandminutes.component';

@Directive({
    selector: '[dl-timewidget]',
})
export class TimeWidgetDirective implements OnInit {

    @Input() type: string;

    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {

    }

     ngOnInit() {
        if (this.type === '24hrs') {
            this.createTimeWidget(Timewidget24hrclockComponent);
        } else  if (this.type === 'hrsandMin') {
            this.createTimeWidget(TimeWidgetHoursAndMinuteComponent);
        }else  if (this.type === 'basic') {
            this.createTimeWidget(TimeWidgetBasicComponent);
        }
    }

    createTimeWidget(dialogComponent: { new (): BaseTimeWidgetComponent }): ComponentRef<BaseTimeWidgetComponent> {
        let dialogComponentRef;
        let dialogComponentFactory =
            this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        return dialogComponentRef;
    }
}
