import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-the-petty-poneglyph-podcast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-petty-poneglyph-podcast.component.html',
  styleUrl: './the-petty-poneglyph-podcast.component.css'
})
export class ThePettyPoneglyphPodcastComponent {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
