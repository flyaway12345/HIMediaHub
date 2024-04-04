import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-game-select',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.css']
})
export class GameSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
