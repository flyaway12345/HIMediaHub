import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TwitchComponent } from './twitch/twitch.component';
import { KickComponent } from "./kick/kick.component";
import { CommonModule } from '@angular/common';

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
        CommonModule
    ]
})
export class LiveMobileComponent implements OnInit {

  mobHeight: any;
  mobWidth: any;
  liveswitch:boolean = false;
  
  constructor() { 
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
      console.log(this.mobHeight);
      console.log(this.mobWidth)
  }
  twitchOrKick:boolean = false;
  playerSwitch() {
    this.twitchOrKick = !this.twitchOrKick;
  }

  ngOnInit(): void {
    if(this.mobWidth < this.mobHeight){
      this.liveswitch = false;
    }else {
      this.liveswitch = true;
    }
  }
}
