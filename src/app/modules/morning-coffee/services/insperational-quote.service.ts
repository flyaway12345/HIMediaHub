import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsperationalQuoteService {
  private url = 'https://quote-garden.onrender.com/api/v3/quotes/random';

  constructor(private httpClient: HttpClient) { }

  getQuote(){
    return this.httpClient.get(this.url);
  }
}
