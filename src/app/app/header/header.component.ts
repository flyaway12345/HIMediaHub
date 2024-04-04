import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocialsComponent } from 'src/app/modules/links/socials/socials.component';
import { LiveComponent } from 'src/app/modules/watchbox/live/live.component';

@Component({
  selector: 'app-header', 
  standalone: true,
  imports: [
    SocialsComponent,
    LiveComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor() { }


}
