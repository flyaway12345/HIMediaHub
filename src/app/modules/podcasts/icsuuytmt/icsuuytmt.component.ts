import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icsuuytmt',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './icsuuytmt.component.html',
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
