import { Component } from '@angular/core';
import { LibraryComponent } from './library-component';
import { ComponentLibraryServices } from './component-library.service';

@Component({
    selector: 'dl-component-library',
    templateUrl: 'app/component-library/component-library.component.html',
    styles: ['.section a.active{color:#fff}']
})

export class ComponentLibraryComponent {
    public libraryComponents: any;
    public selectedComponent: any;
    searchComponent = '';

    constructor(private componentLibraryService: ComponentLibraryServices) {
        componentLibraryService.getJSON().subscribe(
            data => {
                this.libraryComponents = data.libraryComponent;
                this.selectedComponent = this.libraryComponents[0];
            },
            error => {
                console.log(error);
            }
        );
    }


    onSelect(libraryComponent: LibraryComponent) {
        this.selectedComponent = libraryComponent;
    }

}



