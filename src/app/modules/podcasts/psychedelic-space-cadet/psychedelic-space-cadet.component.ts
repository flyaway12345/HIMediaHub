import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-psychedelic-space-cadet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './psychedelic-space-cadet.component.html',
  styleUrl: './psychedelic-space-cadet.component.css'
})
export class PsychedelicSpaceCadetComponent {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
