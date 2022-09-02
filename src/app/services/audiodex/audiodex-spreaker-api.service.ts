import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudiodexSpreakerAPIService {
  getAudiodexEpisodesViaURL = "https://api.spreaker.com/v2/shows/1433865/episodes?oldest";
  constructor(private http: HttpClient) { }

  getData(url:string){
    return this.http.get(url);
  }
}
