import { Component, OnInit } from '@angular/core';
import { LiveComponent } from './live/live.component';
import { VideosComponent } from './videos/videos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watchbox',
  standalone: true,
  imports:[
    LiveComponent,
    VideosComponent,
    CommonModule
  ],
  templateUrl: './watchbox.component.html',
  styleUrls: ['./watchbox.component.css']
})
export class WatchboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  liveswitch:boolean = false;
  onClick(){
    this.liveswitch = !this.liveswitch
  }
}


