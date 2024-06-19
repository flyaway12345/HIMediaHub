import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { AppDirectoryServiceService } from './app-directory-service.service';
import { AppDirSearchPipe } from "./app-dir-search.pipe";
@Component({
    selector: 'app-app-directory',
    standalone: true,
    templateUrl: './app-directory.component.html',
    styleUrls: ['./app-directory.component.css'],
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        FormsModule,
        CommonModule,
        AppDirSearchPipe
    ]
})


export class AppDirectoryComponent implements OnInit {
  search: any;
  appList: Array<any> = [];
  public constructor(private appDirectoryServiceService:AppDirectoryServiceService) {}
  
  public orderByVisibility(): void {
    this.appList = this.appList.sort((a: { display: number; }, b: { display: number; }) => b.display - a.display);
    console.log("sorted");
  }
  public filterApps():void {
  }
  public baseData() {
    this.appDirectoryServiceService.getData().subscribe(res => {
      this.appList = res;
      console.log("data aquired");
      this.orderByVisibility()
    });
  }
  public formatData() {
    this.appDirectoryServiceService.getDataBySearch(this.search).subscribe(res => {
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

  ngOnInit(): void {
    this.baseData();
  }


}
