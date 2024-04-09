import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-live',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
