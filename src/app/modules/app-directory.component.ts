import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-directory', 
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule 
  ],
  templateUrl: './app-directory.component.html',
  styleUrls: ['./app-directory.component.css']
})
export class AppDirectoryComponent implements OnInit {
  textSearch: any;
  appList: any;
  displayApp: boolean = true;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/modulesList.json';
  public constructor(private http: HttpClient) {}
  
  public orderByID(): void {
    this.appList = this.appList.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
    console.log("sorted");
  }
  public performFilter() {
    this.appList = this.appList.filter((res: { display: boolean; }) => res.display == true);
    console.log("filtered");
  }
  
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.appList = res;
      this.orderByID();
  });
  
}
}
