import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-whydoesthiskeephappening',
    imports: [CommonModule],
    templateUrl: './whydoesthiskeephappening.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './whydoesthiskeephappening.css'
})
export class Whydoesthiskeephappening  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
