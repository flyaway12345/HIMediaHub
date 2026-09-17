import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TimerMenuComponent } from "./timer-menu/timer-menu.component";
import { InteractionMenuComponent } from "./interaction-menu/interaction-menu.component";
import { DiscordComponent } from "../../../app/header/discord/discord.component";
import { StreamCalenderComponent } from "./stream-calender/stream-calender.component";
import { StreamAvatarComponent } from "../stream-avatar/stream-avatar.component";

@Component({
    selector: 'app-live-menu',
    templateUrl: './live-menu.component.html',
    styleUrls: ['./live-menu.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        InteractionMenuComponent,
        StreamCalenderComponent,
        StreamAvatarComponent
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


