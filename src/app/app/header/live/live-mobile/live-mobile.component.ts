import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TwitchComponent } from './twitch/twitch.component';
import { KickComponent } from "./kick/kick.component";
import { CommonModule } from '@angular/common';
import { TrovoComponent } from "./trovo/trovo.component";

@Component({
    selector: 'app-live-mobile',
    standalone: true,
    templateUrl: './live-mobile.component.html',
    styleUrls: ['./live-mobile.component.css'],
    imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TwitchComponent,
    KickComponent,
    CommonModule,
    TrovoComponent
]
})
export class LiveMobileComponent implements OnInit {

  mobHeight: any;
  mobWidth: any;
  
  constructor() { 
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
  }
  twitchOrKick:boolean = true;
  playerSwitch() {
    this.twitchOrKick = !this.twitchOrKick;
  }
  isTwitch:boolean = true;
  isKick:boolean = false;
  isTrovo:boolean = false;

  playerSwitchTwitch() {
    this.isTwitch = true;
    this.isKick =false;
    this.isTrovo =false;
  }
  playerSwitchKick() {
    this.isTwitch = false;
    this.isKick =true;
    this.isTrovo =false;
  }
  playerSwitchTrovo() {
    this.isTwitch = false;
    this.isKick =false;
    this.isTrovo =true;
  }
  ngOnInit(): void {

  }
}
