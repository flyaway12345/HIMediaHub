import { Component, OnInit } from '@angular/core';
import { LiveComponent } from '../../app/header/live/live.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LiveMobileComponent } from "../../app/header/live-mobile/live-mobile.component";

@Component({
    selector: 'app-games',
    standalone: true,
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.css'],
    imports: [
        LiveComponent,
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        LiveMobileComponent
    ]
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
