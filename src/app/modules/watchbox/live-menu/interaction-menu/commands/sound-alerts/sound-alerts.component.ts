import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-sound-alerts',
    imports: [],
    templateUrl: './sound-alerts.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './sound-alerts.component.css'
})
export class SoundAlertsComponent {
  onClickCopy(text: any){
    navigator.clipboard.writeText("!redeem "+ text);
  }
}
