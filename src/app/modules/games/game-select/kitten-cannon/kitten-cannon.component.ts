import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-kitten-cannon',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './kitten-cannon.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./kitten-cannon.component.css']
})
export class KittenCannonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
