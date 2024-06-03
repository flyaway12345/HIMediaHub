import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-crown-leaderboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './crown-leaderboard.component.html',
  styleUrl: './crown-leaderboard.component.css'
})
export class CrownLeaderboardComponent implements OnInit{
  leaderboard: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/crown-leaderboard/data/leaderboard.json';
  public constructor(private http: HttpClient) {}
  
  public orderByWinstonCupLevel(): void {
    this.leaderboard = this.leaderboard.sort((a: { points_twc: number; }, b: { points_twc: number; }) => b.points_twc - a.points_twc);
    console.log("sorted");
  }
  public orderByCrowns(): void {
    this.leaderboard = this.leaderboard.sort((a: { crowns: number; }, b: { crowns: number; }) => b.crowns - a.crowns);
    console.log("sorted");
  }
  

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.leaderboard = res;
      this.orderByCrowns();
  });
  
}


}
