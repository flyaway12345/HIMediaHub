import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-winston-cup',
  templateUrl: './the-winston-cup.component.html',
  styleUrls: ['./the-winston-cup.component.css']
})
export class TheWinstonCupComponent implements OnInit {
  leaderboard: any;
  url: string = 'D:\\Code\\HIMediaHub\\src\\app\\modules\\the-winston-cup\\data\\leaderboard.json';
  public constructor(private http: HttpClient) {}
  
  public orderByPoints(): void {
    // this.leaderboard = this.leaderboard.sort((a,b) => a.points - b.points);
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.leaderboard = res;
  });
  
}
}