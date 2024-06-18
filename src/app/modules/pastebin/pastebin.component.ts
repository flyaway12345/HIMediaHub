import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pastebin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pastebin.component.html',
  styleUrl: './pastebin.component.css'
})
export class PastebinComponent {
  pasteList: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/pastebin/data/pastebin.json';
  public constructor(private http: HttpClient) {}
  
  public orderByID(): void {
    this.pasteList = this.pasteList.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
    console.log("sorted");
  }
  
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.pasteList = res;
      this.orderByID();
  });
  
}

}
