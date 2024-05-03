import { Component, OnInit } from '@angular/core';
import { LiveComponent } from '../../app/header/live/live.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LiveMobileComponent } from "../../app/header/live-mobile/live-mobile.component";

@Component({
    selector: 'app-donate',
    standalone: true,
    templateUrl: './donate.component.html',
    styleUrls: ['./donate.component.css'],
    imports: [
        LiveComponent,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        LiveMobileComponent
    ]
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
