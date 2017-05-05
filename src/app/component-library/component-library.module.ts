import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryComponent } from './component-library.component';
import { DetailsComponent } from './details.component';
import { ComponentLibraryServices } from './component-library.service';
import { SharedModule } from '../shared/shared.module';
import { ExampleComponent } from './example.component';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { Filter } from './filter';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap';



@NgModule({
    declarations: [
        ComponentLibraryComponent,
        DetailsComponent,
        ExampleComponent, Filter ],
    exports: [
        ComponentLibraryComponent,
        DetailsComponent,
        ExampleComponent
    ],
    imports: [CommonModule, SharedModule,  AlertModule.forRoot(),
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        FormsModule,
        TypeaheadModule.forRoot()
        ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ComponentLibraryServices]
})
export class ComponentLibraryModule {

}
