import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thepaldeckfiles',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './thepaldeckfiles.component.html',
  styleUrls: ['./thepaldeckfiles.component.css']
})
export class ThePaldeckFilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
