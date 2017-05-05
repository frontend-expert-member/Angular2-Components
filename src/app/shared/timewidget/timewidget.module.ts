// our root app component
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTimeWidgetComponent } from './basetimewidget.component';
import { TimeWidgetBasicComponent } from './timewidget.basic.component';
import { Timewidget24hrclockComponent } from './timewidget.24hrclock.component';
import { TimeWidgetHoursAndMinuteComponent } from './timewidget.hrsandminutes.component';
import { TimeWidgetDirective } from './timewidget.directive';

@NgModule({
  declarations: [ TimeWidgetBasicComponent, Timewidget24hrclockComponent, TimeWidgetHoursAndMinuteComponent, TimeWidgetDirective ],

  exports: [ TimeWidgetBasicComponent, Timewidget24hrclockComponent, TimeWidgetHoursAndMinuteComponent, TimeWidgetDirective ],

  imports: [ CommonModule],

  entryComponents: [ TimeWidgetBasicComponent, Timewidget24hrclockComponent, TimeWidgetHoursAndMinuteComponent]
})

export class TimeModule {}
