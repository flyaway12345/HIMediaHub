import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-interaction-items',
    imports: [],
    templateUrl: './interaction-items.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './interaction-items.component.css'
})
export class InteractionItemsComponent {
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
