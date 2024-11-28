import { Component, inject } from '@angular/core';
import { DatePipe, Location } from "@angular/common";

@Component({
    selector: 'app-car-pool',
    templateUrl: './car-pool.component.html',
    styleUrls: ['./car-pool.component.scss']
})
export class CarPoolComponent {
    location: Location = inject(Location);
    dateString: any;
    timeString: any;
    flexibility?: number;

    constructor() {
        const date = new Date();
        const datePipe = new DatePipe('en-US');
        this.dateString = datePipe.transform(date, 'dd/MM/yyyy');
        let nextHour = new Date();
        nextHour.setHours(date.getHours() + 1);
        nextHour.setMinutes(0);

        this.timeString = datePipe.transform(nextHour, 'h:mm aa');
    }

    save(){
        console.log('saved');
    }

}
