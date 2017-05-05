import { Component } from '@angular/core';

import { CONSTANTS } from './shared';

@Component({
    selector: 'dl-root',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
