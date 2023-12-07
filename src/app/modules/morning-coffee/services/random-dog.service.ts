import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  private url = 'http://api.forismatic.com/api/1.0/';

  constructor(private httpClient: HttpClient) { }

  getQuote(){
    return this.httpClient.get(this.url);
  }
}
