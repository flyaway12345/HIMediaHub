import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LiveComponent } from '../../app/header/live/live.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LiveMobileComponent } from "../../app/header/live/live-mobile/live-mobile.component";

@Component({
    selector: 'app-donate',
    templateUrl: './donate.component.html',
    styleUrls: ['./donate.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
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
