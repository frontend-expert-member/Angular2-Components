import { Component } from '@angular/core';
import { BaseTimeWidgetComponent } from './basetimewidget.component';

@Component({
  selector: 'dl-timewidget-hours-and-minute',
  templateUrl: 'app/shared/timewidget/timewidget.hrsandminutes.component.html'
})

export class TimeWidgetHoursAndMinuteComponent extends BaseTimeWidgetComponent {
  public selectedHrs: Hrs = new Hrs('12');
  public hourList = [
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
  public selectedMin: Min = new Min('00');
  public MinList = [
     new Min('00'),
     new Min('15'),
     new Min('30'),
     new Min('45'),
  ];
  public selectedPeriod: Period = new Period('am');
  public timePeriodList = [
     new Period('am'),
     new Period('pm'),
  ];
}

class Hrs {
  constructor(public currentHour: string) { }
}
class Min {
  constructor(public currentMin: string) { }
}
class Period {
  constructor(public currenttimePeriod: string) { }
}
