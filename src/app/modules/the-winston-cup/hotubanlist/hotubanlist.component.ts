import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotubanlist',
  templateUrl: './hotubanlist.component.html',
  styleUrls: ['./hotubanlist.component.css']
})
export class HotubanlistComponent implements OnInit {

  banlist: any;
  url: string = '';
  public constructor(private http: HttpClient) {}



  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.banlist = res;
  });
  
  }
}
