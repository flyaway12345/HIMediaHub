import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  constructor() { }

private _value = '';

get value(): string {
  return this._value;
}
 
set value(value : string) {
  this._value = value;
}

  ngOnInit(): void {
    this.value = 'Type Something to Replace Me';
  }

}
