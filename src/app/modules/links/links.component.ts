import { Component, OnInit } from '@angular/core';
import { DiscordComponent } from '../../app/header/discord/discord.component';
import { SocialsComponent } from '../../app/header/socials/socials.component';
import { LiveComponent } from '../../app/header/live/live.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TheWinstonCupComponent } from '../the-winston-cup/the-winston-cup.component';
import { LiveMobileComponent } from "../../app/header/live-mobile/live-mobile.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css'],
    imports: [
        DiscordComponent,
        SocialsComponent,
        LiveComponent,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        TheWinstonCupComponent,
        LiveMobileComponent
    ]
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
