// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {

}


