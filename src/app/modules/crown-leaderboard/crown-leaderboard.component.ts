import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
    selector: 'app-crown-leaderboard',
    imports: [
        CommonModule

    ],
    templateUrl: './crown-leaderboard.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './crown-leaderboard.component.css'
})
export class CrownLeaderboardComponent implements OnInit{
  leaderboard: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/HIMediaHub/json/leaderboard.json';
  public constructor(private http: HttpClient) {

  }

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
