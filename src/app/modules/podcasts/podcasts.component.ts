import { Component, OnInit } from '@angular/core';
import { WinstonMasterDuelRoundtableComponent } from './wmdroundtable/wmdroundtable.component';
import { TheRundownComponent } from './the-rundown/therundown.component';
import { ThePaldeckFilesComponent } from './the-paldeck-files/thepaldeckfiles.component';
import { AudiodexPlayerComponent } from './audiodex/audiodex-player/audiodex-player.component';
import { HISoapboxComponent } from './hisoapbox/hisoapbox.component';
import { HimediatvNewsUpdateComponent } from './himediatv-news-update/himediatv-news-update.component';
import { NerdNewsComponent } from './nerd-news/nerdnews.component';
import { ICSUUYTMTComponent } from './icsuuytmt/icsuuytmt.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-podcasts', 
  standalone: true,
  imports: [
    WinstonMasterDuelRoundtableComponent,
    TheRundownComponent,
    ThePaldeckFilesComponent,
    AudiodexPlayerComponent,
    HISoapboxComponent,
    HimediatvNewsUpdateComponent,
    NerdNewsComponent,
    ICSUUYTMTComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
