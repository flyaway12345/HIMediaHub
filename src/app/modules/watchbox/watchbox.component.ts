import { Component, OnInit } from '@angular/core';
import { LiveComponent } from '../../app/header/live/live.component';
import { VideosComponent } from './videos/videos.component';
import { CommonModule } from '@angular/common';
import { LiveMenuComponent } from "./live-menu/live-menu.component";
import { DiscordComponent } from "../../app/header/discord/discord.component";
import { CommandsComponent } from "./live-menu/interaction-menu/commands/commands.component";
@Component({
    selector: 'app-watchbox',
    standalone: true,
    templateUrl: './watchbox.component.html',
    styleUrls: ['./watchbox.component.css'],
    imports: [
        LiveComponent,
        VideosComponent,
        CommonModule,
        LiveMenuComponent,
        DiscordComponent,
        CommandsComponent
    ]
})
export class WatchboxComponent {
    mobHeight: any;
    mobWidth: any;
  
  constructor() { 
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
  }
}


