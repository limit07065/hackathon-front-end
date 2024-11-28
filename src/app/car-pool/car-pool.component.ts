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
    posts: any[];
    id: number;
    joined: number[];
    newPost: any;

    constructor() {
        this.id = 0;
        const date = new Date();
        const datePipe = new DatePipe('en-US');
        this.dateString = datePipe.transform(date, 'dd/MM/yyyy');
        let nextHour = new Date();
        nextHour.setHours(date.getHours() + 1);
        nextHour.setMinutes(0);

        this.timeString = datePipe.transform(nextHour, 'h:mm aa');
        this.posts = [];
        let post: any = {id: this.id, destination: 'North Tech', name: 'Raymond Tan', meetAt: 'North Coast', date: date, time: nextHour, flexibility: 0, occupiedSlots: 0, totalSlots: 3}
        this.id++;
        this.posts.push(post);
        this.joined = [];
        this.newPost = {totalSlots: 3};
    }

    save() {

        // process date
        try {
            let datePart = this.dateString.split('/');
            this.newPost.date = new Date();
            let month = +datePart[1] != 0 ? datePart[1] - 1 : 0;
            this.newPost.date.setFullYear(datePart[2], month, datePart[0]);
        } catch (e) {
            return;
        }

        try {
            // process minutes
            let hour: number = +this.timeString.split(':')[0];
            let minutes: number = +this.timeString.split(':')[1].split(' ')[0];
            let past12: boolean = this.timeString.split(':')[1].split(' ')[1].trim() == 'PM';
            if (past12) {
                hour += 12;
            }

            this.newPost.time = new Date(this.newPost.date.getTime());
            this.newPost.time.setHours(hour);
            this.newPost.time.setMinutes(minutes);
        } catch (e) {
            return;
        }

        this.newPost.name = "User";
        if (!this.newPost.flexibility) {
            this.newPost.flexibility = 0;
        }
        if (!this.newPost.totalSlots) {
            return;
        }

        this.newPost.occupiedSlots = 0;

        this.newPost.id = this.id;
        this.id++;
        this.posts.push(this.newPost);
        this.newPost = {totalSlots: 3};
    }

    join(id: number) {
        if (this.joined.includes(id)) {
            return;
        }
        this.joined.push(id);
        this.posts[id].occupiedSlots += 1;

    }

}
