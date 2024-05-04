import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-game-select',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule],
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.css']
})
export class GameSelectComponent implements OnInit, OnChanges {
  gameData: any;
  selectedGame: number = 0;
  selectedGameURI:any = "#";
  showGame:boolean = false;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/games/game-select/data/gameData.json';
  public constructor(private http: HttpClient,private sanitizer: DomSanitizer) {}


  onClick(index:number){
    this.showGame = true;
    this.selectedGame = index;
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.gameData = res;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.selectedGameURI = this.sanitizer.bypassSecurityTrustResourceUrl(this.gameData[this.selectedGame].src);

  }
}