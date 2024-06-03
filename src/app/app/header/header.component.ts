import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocialsComponent } from './socials/socials.component';
import { LiveComponent } from "./live/live.component";
import { LiveMobileComponent } from "./live/live-mobile/live-mobile.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [
        SocialsComponent,
        LiveComponent,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        LiveMobileComponent
    ]
})
export class HeaderComponent{

  constructor() { }


}
