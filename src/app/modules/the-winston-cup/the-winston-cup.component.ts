import { Component, OnInit } from '@angular/core';
import { HotubanlistComponent } from './hotubanlist/hotubanlist.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CrownLeaderboardComponent } from '../crown-leaderboard/crown-leaderboard.component';

@Component({
  selector: 'app-the-winston-cup', 
  standalone: true,
  imports:[CrownLeaderboardComponent,
            HotubanlistComponent,
            CommonModule,
            RouterOutlet,
            RouterLink,
            RouterLinkActive
          ],
  templateUrl: './the-winston-cup.component.html',
  styleUrls: ['./the-winston-cup.component.css']
})
export class TheWinstonCupComponent {
  banlistDisplay:boolean = false;
  leaderboardDisplay:boolean = false;
  public constructor() {}
  
  onClickBanlist(){
    this.banlistDisplay = !this.banlistDisplay;
  }
  onClickLeaderboard(){
    this.leaderboardDisplay = !this.leaderboardDisplay;
  }

  }
