import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-thepaldeckfiles',
    imports: [
        CommonModule
    ],
    templateUrl: './thepaldeckfiles.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./thepaldeckfiles.component.css']
})
export class ThePaldeckFilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
