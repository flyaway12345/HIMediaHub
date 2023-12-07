import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  private url = 'https://dog.ceo/api/breeds/image/random/1';

  constructor(private httpClient: HttpClient) { }

  getQuote(){
    return this.httpClient.get(this.url);
  }
}
