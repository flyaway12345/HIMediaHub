import { Component } from '@angular/core';

@Component({
  selector: 'app-egg-index',
  standalone: true,
  imports: [],
  templateUrl: './mbe-index.component.html',
  styleUrl: './mbe-index.component.css'
})
export class MbeIndexComponent {
  mobHeight: string;
  mobWidth: string;
  constructor() {
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
  }
}
