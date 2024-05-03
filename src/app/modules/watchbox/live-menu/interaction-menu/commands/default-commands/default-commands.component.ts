import { Component } from '@angular/core';

@Component({
  selector: 'app-default-commands',
  standalone: true,
  imports: [],
  templateUrl: './default-commands.component.html',
  styleUrl: './default-commands.component.css'
})
export class DefaultCommandsComponent {
  onClickCopy(text: any){
    navigator.clipboard.writeText("!"+ text);
  }
}
