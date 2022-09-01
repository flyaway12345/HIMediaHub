import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  private _infoSearchBar = '';
  get infoSearchBar(): string {
    return this._infoSearchBar;
  }
  set infoSearchBar(infoSearchBar : string) {
    this._infoSearchBar = infoSearchBar;
  }
  
  @Output() titleUpdate: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

onClick(): void{
    this.titleUpdate.emit
}

}
