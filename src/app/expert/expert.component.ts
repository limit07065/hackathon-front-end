import { Component, inject } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent {
  location: Location = inject(Location);
}
