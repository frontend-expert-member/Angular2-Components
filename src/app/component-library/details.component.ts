import { Component, Input } from '@angular/core';
import { LibraryComponent } from './library-component';

@Component({
    selector: 'dl-component-details',
    templateUrl: 'app/component-library/details.component.html',
})

export class DetailsComponent {
   @Input()libraryComponents: LibraryComponent;
}
