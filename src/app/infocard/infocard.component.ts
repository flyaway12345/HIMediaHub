import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  constructor() { }

  cardTitle : string = ''

//testing interpolation

  ngOnInit(): void {
    this.cardTitle = 'Change This Cards Text'
  }

  onTitleUpdate(message:string): void{
    this.cardTitle = message;
  }
}
