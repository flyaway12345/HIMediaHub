import { Component } from '@angular/core';
import { TwitchComponent } from './twitch/twitch.component';
import { KickComponent } from "./kick/kick.component";
import { CommonModule } from '@angular/common';
import { TrovoComponent } from "./trovo/trovo.component";

@Component({
    selector: 'app-live-desktop',
    standalone: true,
    templateUrl: './live-desktop.component.html',
    styleUrl: './live-desktop.component.css',
    imports: [TwitchComponent, KickComponent, CommonModule, TrovoComponent]
})
export class LiveDesktopComponent {
  twitchOrKick:boolean = false;
  mobHeight: any;
  mobWidth: any;
  liveswitch:boolean = true;
  playerSwitch() {
    this.twitchOrKick = !this.twitchOrKick;
  }
  constructor() { 
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
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
