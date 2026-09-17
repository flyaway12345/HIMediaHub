import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NewsfeedGamingComponent } from './newsfeed-gaming/newsfeed-gaming.component';
import { NewsfeedNewsComponent } from './newsfeed-news/newsfeed-news.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LiveComponent } from "../../app/header/live/live.component";
import { LiveMobileComponent } from "../../app/header/live/live-mobile/live-mobile.component";
import { HIMediaHeadlinesComponent } from "../podcasts/himediaheadlines/himediaheadlines.component";

@Component({
    selector: 'app-newsfeed',
    imports: [
        NewsfeedGamingComponent,
        NewsfeedNewsComponent,
        CommonModule,
        HIMediaHeadlinesComponent
    ],
    templateUrl: './newsfeed.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
