import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-videos',
    imports: [
    ],
    templateUrl: './videos.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
