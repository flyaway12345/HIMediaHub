import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TimerMenuComponent } from "./timer-menu/timer-menu.component";
import { InteractionMenuComponent } from "./interaction-menu/interaction-menu.component";
import { DiscordComponent } from "../../../app/header/discord/discord.component";

@Component({
    selector: 'app-live-menu',
    standalone: true,
    templateUrl: './live-menu.component.html',
    styleUrls: ['./live-menu.component.css'],
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        TimerMenuComponent,
        InteractionMenuComponent,
        DiscordComponent
    ]
})
export class LiveMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  liveswitchSub:boolean = false;
  onClick(){
    this.liveswitchSub = !this.liveswitchSub
  }
}


