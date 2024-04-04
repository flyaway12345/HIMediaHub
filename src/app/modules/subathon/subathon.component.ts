import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-subathon',
  standalone:true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
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


