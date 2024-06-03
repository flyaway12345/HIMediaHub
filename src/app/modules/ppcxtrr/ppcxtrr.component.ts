import { Component, OnInit } from '@angular/core';
import { DiscordComponent } from '../../app/header/discord/discord.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-ppcxtrr', 
  standalone: true,
  imports: [
    DiscordComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './ppcxtrr.component.html',
  styleUrls: ['./ppcxtrr.component.css']
})
export class PPCxTRRComponent implements OnInit {
  constructor() { }
  pullDog(){

  }
  ngOnInit(): void {

  }

}
