import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
