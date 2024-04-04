import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-kitten-cannon',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './kitten-cannon.component.html',
  styleUrls: ['./kitten-cannon.component.css']
})
export class KittenCannonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
