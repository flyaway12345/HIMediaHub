import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchbox',
  templateUrl: './watchbox.component.html',
  styleUrls: ['./watchbox.component.css']
})
export class WatchboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  liveswitch:boolean = false;
  onClick(){
    this.liveswitch = !this.liveswitch
  }
}


