import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed-news', 
  standalone: true,
  imports: [
    
  ],
  templateUrl: './newsfeed-news.component.html',
  styleUrls: ['./newsfeed-news.component.css']
})
export class NewsfeedNewsComponent implements OnInit {

    mobHeight: any;
    mobWidth: any;
  
  constructor() { 
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
  }
  ngOnInit(): void {
    console.log(this.mobHeight + " search")
  }

}
