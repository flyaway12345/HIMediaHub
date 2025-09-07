import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whydoesthiskeephappening',
  imports: [ CommonModule ],
  templateUrl: './whydoesthiskeephappening.html',
  styleUrl: './whydoesthiskeephappening.css',
  standalone: true
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
