import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hisoapbox',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hisoapbox.component.html',
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
