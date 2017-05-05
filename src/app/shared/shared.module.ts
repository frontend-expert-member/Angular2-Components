import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './header/index';
import { TimeModule } from './timewidget/timewidget.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { CalculatorModule } from './calculator/calculator.module';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, TimeModule, DatepickerModule, CalculatorModule],
  declarations: [],
  exports: [HeaderModule, TimeModule, DatepickerModule, CalculatorModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
