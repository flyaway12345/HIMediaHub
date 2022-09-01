import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  constructor() { }



//testing interpolation
private _infoSearchBar = '';
get infoSearchBar(): string {
  return this._infoSearchBar;
}
set infoSearchBar(infoSearchBar : string) {
  this._infoSearchBar = infoSearchBar;
}

  ngOnInit(): void {
    this.infoSearchBar = 'Type Something to Replace Me';
  }

}
