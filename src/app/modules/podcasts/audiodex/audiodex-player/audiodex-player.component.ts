import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-audiodex-player',
    imports: [
        CommonModule
    ],
    templateUrl: './audiodex-player.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
