import {Component} from '@angular/core';


@Component({
    selector: 'me-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss'
    ]
})

export class AppComponent {
    name = '';

    constructor() {
    }
}
