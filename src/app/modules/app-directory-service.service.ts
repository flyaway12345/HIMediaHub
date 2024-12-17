import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDirectoryServiceService {
  url: string = 'https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/json/modulesList.json';

  constructor(private http: HttpClient) { }


  public getData() : Observable<any> {
   return this.http.get(this.url);
  }

  public getDataBySearch(search:string) : Observable<any> {
    return this.http.get(this.url).pipe(map( (data: any) => data.filter( (res:any) => res.name === search)));
   }
}
