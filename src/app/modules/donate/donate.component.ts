import { Component, OnInit } from '@angular/core';
import { LiveComponent } from '../watchbox/live/live.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-donate', 
  standalone: true,
  imports: [
    LiveComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
