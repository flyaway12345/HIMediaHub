import { Component } from '@angular/core';
import { CommandsComponent } from "./commands/commands.component";

@Component({
    selector: 'app-interaction-menu',
    standalone: true,
    templateUrl: './interaction-menu.component.html',
    styleUrl: './interaction-menu.component.css',
    imports: [CommandsComponent]
})
export class InteractionMenuComponent {
  mobHeight: any;
  mobWidth: any;
  liveswitch:boolean = false;
  constructor() { 
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
      console.log(this.mobHeight);
      console.log(this.mobWidth)
  }

}
