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

  constructor() { }

  ngOnInit(): void {
  }

}
