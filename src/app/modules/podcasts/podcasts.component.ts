import { Component, OnInit } from '@angular/core';
import { WinstonMasterDuelRoundtableComponent } from './wmdroundtable/wmdroundtable.component';
import { TheRundownComponent } from './the-rundown/therundown.component';
import { ThePaldeckFilesComponent } from './the-paldeck-files/thepaldeckfiles.component';
import { AudiodexPlayerComponent } from './audiodex/audiodex-player/audiodex-player.component';
import { HISoapboxComponent } from './hisoapbox/hisoapbox.component';
import { HIMediaHeadlinesComponent } from './himediaheadlines/himediaheadlines.component';
import { ICSUUYTMTComponent } from './icsuuytmt/icsuuytmt.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThePettyPoneglyphPodcastComponent } from "./the-petty-poneglyph-podcast/the-petty-poneglyph-podcast.component";
import { LittleBlackBookComponent } from "./little-black-book/little-black-book.component";
import { PsychedelicSpaceCadetComponent } from "./psychedelic-space-cadet/psychedelic-space-cadet.component";

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
    RouterLinkActive,
    ThePettyPoneglyphPodcastComponent,
    LittleBlackBookComponent,
    PsychedelicSpaceCadetComponent
],
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
