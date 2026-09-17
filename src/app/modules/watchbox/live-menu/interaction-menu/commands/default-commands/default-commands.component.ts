import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-default-commands',
    imports: [],
    templateUrl: './default-commands.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './default-commands.component.css'
})
export class DefaultCommandsComponent {
  onClickCopy(text: any){
    navigator.clipboard.writeText("!"+ text);
  }
}
