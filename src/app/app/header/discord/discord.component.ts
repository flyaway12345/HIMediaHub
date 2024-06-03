import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-discord',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css']
})
export class DiscordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
