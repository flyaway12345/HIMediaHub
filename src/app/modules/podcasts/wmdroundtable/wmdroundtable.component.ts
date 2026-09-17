import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-wmdroundtable',
    imports: [
        CommonModule
    ],
    templateUrl: './wmdroundtable.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./wmdroundtable.component.css']
})
export class WinstonMasterDuelRoundtableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
