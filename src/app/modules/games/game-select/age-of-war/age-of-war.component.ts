import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-age-of-war',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './age-of-war.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./age-of-war.component.css']
})
export class AgeOfWarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
