import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-psychedelic-space-cadet',
    imports: [CommonModule],
    templateUrl: './psychedelic-space-cadet.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
