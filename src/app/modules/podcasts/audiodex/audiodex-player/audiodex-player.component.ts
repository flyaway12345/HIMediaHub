import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiodex-player',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './audiodex-player.component.html',
  styleUrls: ['./audiodex-player.component.css']
})
export class AudiodexPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
