import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocialsComponent } from './socials/socials.component';
import { LiveComponent } from "./live/live.component";
import { LiveMobileComponent } from "./live/live-mobile/live-mobile.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
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
