import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hallofshame',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './hallofshame.component.html',
  styleUrls: ['./hallofshame.component.css']
})
export class HallofshameComponent implements OnInit {
  listOfNames: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/json/pastebin.json';
  public constructor(private http: HttpClient) {}
  card:boolean = false;

  onClick(){
    this.card = !this.card;
  }
  public orderById(): void {
    this.listOfNames = this.listOfNames.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
    console.log("sorted");
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.listOfNames = res;
      this.orderById();
  });
}
}
