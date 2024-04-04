import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bloonstd4',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './bloonstd4.component.html',
  styleUrls: ['./bloonstd4.component.css']
})
export class Bloonstd4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
