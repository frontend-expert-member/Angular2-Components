import { Component } from '@angular/core';
import { BaseTimeWidgetComponent } from './basetimewidget.component';

@Component({
  selector: 'dl-timewidget-24hrclock',
  templateUrl: 'app/shared/timewidget/timewidget.basic.component.html'
})

export class Timewidget24hrclockComponent extends BaseTimeWidgetComponent {
  public selectedTime: Time = new Time('12am');
  public timeList = [
     new Time('12am'),
     new Time('1am'),
     new Time('2am'),
     new Time('3am'),
     new Time('4am'),
     new Time('5am'),
     new Time('6am'),
     new Time('7am'),
     new Time('8am'),
     new Time('9am'),
     new Time('10am'),
     new Time('11am'),
     new Time('noon'),
     new Time('1pm'),
     new Time('2pm'),
     new Time('3pm'),
     new Time('4pm'),
     new Time('5pm'),
     new Time('6pm'),
     new Time('7pm'),
     new Time('8pm'),
     new Time('9pm'),
     new Time('1pm'),
     new Time('11pm')
  ];
}

class Time {
  constructor(public currentTime: string) { }
}

