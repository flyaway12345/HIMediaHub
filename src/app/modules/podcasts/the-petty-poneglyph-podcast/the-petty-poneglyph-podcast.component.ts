import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-the-petty-poneglyph-podcast',
    imports: [CommonModule],
    templateUrl: './the-petty-poneglyph-podcast.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
