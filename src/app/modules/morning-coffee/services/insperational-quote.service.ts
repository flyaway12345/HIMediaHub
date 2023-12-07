import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsperationalQuoteService {
  private url = 'https://zenquotes.io/api/today';

  constructor(private httpClient: HttpClient) { }

  getQuote(){
    return this.httpClient.get(this.url);
  }
}
