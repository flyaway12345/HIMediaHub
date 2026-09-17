import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-therundown',
    imports: [
        CommonModule
    ],
    templateUrl: './therundown.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./therundown.component.css']
})
export class TheRundownComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
