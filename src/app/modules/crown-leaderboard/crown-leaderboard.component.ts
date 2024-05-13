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
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/the-winston-cup/leaderboard/data/leaderboard.json';
  public constructor(private http: HttpClient) {}
  
  public orderByPoints(): void {
    this.leaderboard = this.leaderboard.sort((a: { points: number; }, b: { points: number; }) => b.points - a.points);
    console.log("sorted");
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.leaderboard = res;
      this.orderByPoints();
  });
  
}


}
