import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocialsComponent } from '../header/socials/socials.component';

@Component({
    selector: 'app-error404',
    imports: [
        SocialsComponent,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './error404.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
