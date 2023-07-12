import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }


  
  @Output() searchUpdate: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }



}
