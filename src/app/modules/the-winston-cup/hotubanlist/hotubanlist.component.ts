import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotubanlist',
  templateUrl: './hotubanlist.component.html',
  styleUrls: ['./hotubanlist.component.css']
})
export class HotubanlistComponent implements OnInit {

  banlist: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/the-winston-cup/hotubanlist/data/bannedCards.json';
  public constructor(private http: HttpClient) {}
  
  liveswitch:boolean = false;
  onClick(){
    this.liveswitch = !this.liveswitch
  }


  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.banlist = res;
  });
  
  }
}
