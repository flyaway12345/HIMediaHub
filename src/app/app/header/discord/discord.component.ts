import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-discord',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './discord.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./discord.component.css']
})
export class DiscordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
