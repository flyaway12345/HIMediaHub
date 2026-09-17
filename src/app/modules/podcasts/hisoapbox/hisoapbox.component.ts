import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-hisoapbox',
    imports: [
        CommonModule
    ],
    templateUrl: './hisoapbox.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hisoapbox.component.css']
})
export class HISoapboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
