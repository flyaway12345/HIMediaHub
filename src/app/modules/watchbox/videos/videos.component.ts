import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
