import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-bloonstd4',
    imports: [
        RouterLink
    ],
    templateUrl: './bloonstd4.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./bloonstd4.component.css']
})
export class Bloonstd4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
