import { Component, inject } from '@angular/core';
import { Location } from "@angular/common";
import { AST } from "@angular/compiler";
import { AskService } from "../ask.service";

@Component({
    selector: 'app-expert',
    templateUrl: './expert.component.html',
    styleUrls: ['./expert.component.scss']
})
export class ExpertComponent {
    location: Location = inject(Location);
    conversation: any[] = [];
    text: string = "Hello, welcome to the Typewriter effect!";
    displayedText: string = "";
    currentIndex: number = 0;
    typingSpeed: number = 100; // Speed in milliseconds (adjust as needed)
    question: string;
    wait: boolean = false;
    private askService: AskService = inject(AskService);

    constructor() {
        this.question = "";
    }

    submit() {
        if (this.wait) {
            return;
        }
        this.conversation.push({type: 'q', content: this.question});

        if (!window.location.host.startsWith('localhost')) {
            let ans = "Sorry, this feature is not available for live demo.";
            this.conversation.push({type: 'a', content: ans});
            this.question = "";
            return;
        }

        this.wait = true;
        this.askService.ask(this.question).subscribe({
            next: (res: any) => {
                if (res?.matches.length > 0) {
                    let ans = 'You might be looking for:';
                    this.conversation.push({type: 'a', content: ans});
                    for (let i = 0; i < res.matches.length; i++) {
                        ans = res.matches[i]['name'] + ' from ' + res.matches[i]['area'] + '.';
                        this.conversation.push({type: 'a', content: ans});
                    }
                } else {
                    let ans = 'Sorry, I may not understand your question correctly or there are no experts that I know of for your question.';
                    this.conversation.push({type: 'a', content: ans});
                }
            },
            error: _ =>{
                let ans = "Sorry, there's an exception while looking for answer";
                this.conversation.push({type: 'a', content: ans});
                this.question = "";
                this.wait = false;
            }
            ,
            complete: () => {
                this.question = "";
                this.wait = false;
            }
        });
    }

}
