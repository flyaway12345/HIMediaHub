import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter } from 'rxjs';
export class pasteBinPOJO{
  constructor(
    public id: string,
    public name: string,
    public url: string,
    public description: string,
    public placeholder: string, 
  ){

  }
}
@Component({
  selector: 'app-pastebin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pastebin.component.html',
  styleUrl: './pastebin.component.css'
})
export class PastebinComponent {
  pasteList: any;
  pasteListArray!: pasteBinPOJO[];
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/pastebin/data/pastebin.json';
  searchParam:string = '';
  public constructor(private http: HttpClient) {}
  
  public orderByID(): void {
    this.pasteList = this.pasteList.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
    console.log("sorted");
  }

  getData(){
    this.http.get<pasteBinPOJO[]>(this.url).subscribe(res => {
      this.pasteList = res;
      this.orderByID();
  });
  }

  

  ngOnInit(): void {
    
    this.getData();
  
}

}
