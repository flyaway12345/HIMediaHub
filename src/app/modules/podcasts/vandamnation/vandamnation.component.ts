import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vandamnation',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './vandamnation.component.html',
  styleUrl: './vandamnation.component.css'
})
export class VandamnationComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
