import { Component, } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dl-header',
    templateUrl: '/app/shared/header/header.component.html'
})
export class HeaderComponent {

    today: number = Date.now();

    constructor() {
        this.today =  Date.now();
        setInterval(() => {
            this.today =  Date.now();
        }, 1000);
    }
}
