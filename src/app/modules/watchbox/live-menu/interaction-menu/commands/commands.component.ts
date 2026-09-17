import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SoundAlertsComponent } from "./sound-alerts/sound-alerts.component";
import { CommonModule } from '@angular/common';
import { DefaultCommandsComponent } from "./default-commands/default-commands.component";

@Component({
    selector: 'app-commands',
    templateUrl: './commands.component.html',
    styleUrl: './commands.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        SoundAlertsComponent,
        CommonModule,
        DefaultCommandsComponent
    ]
})
export class CommandsComponent {
  commandMenuDisplayAlerts: boolean = true;
  onClickCopy(text: any){
    navigator.clipboard.writeText("!"+ text);
  }
  menuSwapAlerts(){
    this.commandMenuDisplayAlerts = !this.commandMenuDisplayAlerts;
  }
}
