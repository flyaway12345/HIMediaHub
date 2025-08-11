import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-himediaheadlines',
  standalone: true,
  imports: [
CommonModule
  ],
  templateUrl: './himediaheadlines.component.html',
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
