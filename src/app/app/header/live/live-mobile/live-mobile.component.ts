import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TwitchComponent } from './twitch/twitch.component';

@Component({
  selector: 'app-live-mobile',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TwitchComponent
  ],
  templateUrl: './live-mobile.component.html',
  styleUrls: ['./live-mobile.component.css']
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

  ngOnInit(): void {
    if(this.mobWidth < this.mobHeight){
      this.liveswitch = false;
    }else {
      this.liveswitch = true;
    }
  }
}
