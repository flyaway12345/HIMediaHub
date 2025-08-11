import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-therundown',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './therundown.component.html',
  styleUrls: ['./therundown.component.css']
})
export class TheRundownComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
