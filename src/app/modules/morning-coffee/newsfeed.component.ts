import { Component, OnInit } from '@angular/core';
import { NewsfeedGamingComponent } from './newsfeed-gaming/newsfeed-gaming.component';
import { NewsfeedNewsComponent } from './newsfeed-news/newsfeed-news.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LiveComponent } from "../../app/header/live/live.component";
import { LiveMobileComponent } from "../../app/header/live/live-mobile/live-mobile.component";
import { NerdNewsComponent } from "../podcasts/nerd-news/nerdnews.component";
import { LateNiteNewsComponent } from '../podcasts/himediatv-news-update/late-nite-news.component';
@Component({
  selector: 'app-newsfeed', 
  standalone: true,
  imports: [
    NewsfeedGamingComponent,
    NewsfeedNewsComponent,
    LateNiteNewsComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LiveComponent,
    LiveMobileComponent,
    NerdNewsComponent
],
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsFeedComponent implements OnInit {
 switchNewsFormat:boolean = true;
newsSwap() {
this.switchNewsFormat = !this.switchNewsFormat;
}
quotes:any;
dogs:any;
  constructor() { }

  ngOnInit(): void {


  }

}
