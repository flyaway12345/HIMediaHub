import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-hotubanlist',
    imports: [
        CommonModule
    ],
    templateUrl: './hotubanlist.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hotubanlist.component.css']
})
export class HotubanlistComponent implements OnInit {

  banlist: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/the-winston-cup/hotubanlist/data/bannedCards.json';
  public constructor(private http: HttpClient) {}

  bannedCards:boolean = false;
  banlistChanges:boolean = true;
  onClickCards(){
    this.bannedCards = !this.bannedCards
  }
  onClickBanlistChanges(){
    this.banlistChanges = !this.banlistChanges
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.banlist = res;
  });

  }
  ngOnChange(): void {
    this.http.get(this.url).subscribe(res => {
      this.banlist = res;
  });
  }
}
