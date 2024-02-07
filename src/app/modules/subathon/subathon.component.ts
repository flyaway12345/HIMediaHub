import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subathon',
  templateUrl: './subathon.component.html',
  styleUrls: ['./subathon.component.css']
})
export class SubathonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  liveswitchSub:boolean = false;
  onClick(){
    this.liveswitchSub = !this.liveswitchSub
  }
}


