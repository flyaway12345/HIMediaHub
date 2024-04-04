import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hallofshame', 
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './hallofshame.component.html',
  styleUrls: ['./hallofshame.component.css']
})
export class HallofshameComponent implements OnInit {
  listOfNames: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/hallofshame/data/shameList.json';
  public constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.listOfNames = res;
  });
}
}