import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LiveDesktopComponent } from "./live-desktop/live-desktop.component";
import { CommonModule } from '@angular/common';
import { LiveMobileComponent } from "./live-mobile/live-mobile.component";

@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        LiveDesktopComponent,
        CommonModule,
        LiveMobileComponent
    ]
})
export class LiveComponent implements OnInit {
  mobHeight: any;
  mobWidth: any;
  liveswitch:boolean = false;
  constructor() {
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
      console.log(this.mobHeight);
      console.log(this.mobWidth)
  }

  ngOnInit(): void {
    if(this.mobWidth < this.mobHeight){
      this.liveswitch = false;
    }else {
      this.liveswitch = true;
    }
  }



  onClick(){
    this.liveswitch = !this.liveswitch
  }

}
