import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
export class GameSelectComponent implements OnInit {
  gameData: any;
  selectedGame: string = "#";
  showGame:boolean = false;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/games/game-select/data/gameData.json';
  public constructor(private http: HttpClient) {}

  onClick(index:number){
    this.gameData[index].src = this.selectedGame;
    
    this.showGame = true;
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.gameData = res;
    });
    console.log(this.gameData);
  }

}