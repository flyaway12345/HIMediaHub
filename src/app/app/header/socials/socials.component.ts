import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-socials',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './socials.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
