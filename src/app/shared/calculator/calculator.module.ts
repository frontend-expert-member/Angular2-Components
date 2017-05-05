import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './index';

@NgModule({
    declarations: [
        CalculatorComponent
    ],
    imports: [
        FormsModule,
    ],
    exports: [
        CalculatorComponent
    ]
})
export class CalculatorModule {
}
