import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-app-directory', 
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule, 
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
  
  public orderByVisibility(): void {
    this.appList = this.appList.sort((a: { display: number; }, b: { display: number; }) => b.display - a.display);
    console.log("sorted");
  }
  public filterApps():void {
  }
  public getData() {
    this.http.get(this.url).subscribe(res => {
      this.appList = res;
      console.log("data aquired");
      this.orderByVisibility()
    });
    
  }
  checkRouter(check:boolean){
    if(check == true){
      return true;
    }else{
      return false
    }
  }
  manualHide(){
    
  }
  ngOnInit(): void {
    this.getData();

}
}
