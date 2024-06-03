import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-age-of-war',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './age-of-war.component.html',
  styleUrls: ['./age-of-war.component.css']
})
export class AgeOfWarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
