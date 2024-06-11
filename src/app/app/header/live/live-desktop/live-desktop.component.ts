import { Component } from '@angular/core';
import { TwitchComponent } from './twitch/twitch.component';
import { KickComponent } from "./kick/kick.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-live-desktop',
    standalone: true,
    templateUrl: './live-desktop.component.html',
    styleUrl: './live-desktop.component.css',
    imports: [TwitchComponent, KickComponent,CommonModule]
})
export class LiveDesktopComponent {
  twitchOrKick:boolean = false;
  playerSwitch() {
    this.twitchOrKick = !this.twitchOrKick;
  }
  // setKick(){

  // }
  // setTwitch(){

  // }
  // setTrovo(){
    
  // }
}
