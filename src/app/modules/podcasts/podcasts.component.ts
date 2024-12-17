import { Component, OnInit } from '@angular/core';
import { WinstonMasterDuelRoundtableComponent } from './wmdroundtable/wmdroundtable.component';
import { TheRundownComponent } from './the-rundown/therundown.component';
import { ThePaldeckFilesComponent } from './the-paldeck-files/thepaldeckfiles.component';
import { AudiodexPlayerComponent } from './audiodex/audiodex-player/audiodex-player.component';
import { HISoapboxComponent } from './hisoapbox/hisoapbox.component';
import { HIMediaHeadlinesComponent } from './himediaheadlines/himediaheadlines.component';
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
    HIMediaHeadlinesComponent,
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
