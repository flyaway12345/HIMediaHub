import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-himediaheadlines',
    imports: [
        CommonModule
    ],
    templateUrl: './himediaheadlines.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./himediaheadlines.component.css']
})
export class HIMediaHeadlinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
