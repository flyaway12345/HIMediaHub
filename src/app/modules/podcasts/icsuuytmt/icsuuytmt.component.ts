import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-icsuuytmt',
    imports: [
        CommonModule
    ],
    templateUrl: './icsuuytmt.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./icsuuytmt.component.css']
})
export class ICSUUYTMTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
