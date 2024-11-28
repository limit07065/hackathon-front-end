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
    newPost:any;

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
        let post:any = {id: this.id, destination: 'North Tech', name: 'Raymond Tan', meetAt: 'North Coast', date: date, time: nextHour, flexibility: 0, occupiedSlots: 0, totalSlots:3}
        this.id++;
        this.posts.push(post);
        this.joined = [];
        this.newPost = {};
    }

    save() {
        this.newPost.id = this.id;
        this.id++;
        this.newPost.date = new Date(this.dateString);
        this.newPost.time = new Date(this.timeString);
        this.newPost.name = "User";
        if (!this.newPost.flexibility){
            this.newPost.flexibility = 0;
        }
        this.newPost.occupiedSlots = 0;
        this.posts.push(this.newPost);
        this.newPost = {};
    }

    join(id:number){
        if (this.joined.includes(id)){
            return;
        }
        this.joined.push(id);
        this.posts[id].occupiedSlots += 1;

    }

}
