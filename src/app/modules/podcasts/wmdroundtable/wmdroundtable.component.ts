import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wmdroundtable',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wmdroundtable.component.html',
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
