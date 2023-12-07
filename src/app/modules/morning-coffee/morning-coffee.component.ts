import { Component, OnInit } from '@angular/core';
import { InsperationalQuoteService } from '../morning-coffee/services/insperational-quote.service'
import { RandomDogService } from './services/random-dog.service';
@Component({
  selector: 'app-morning-coffee',
  templateUrl: './morning-coffee.component.html',
  styleUrls: ['./morning-coffee.component.css']
})
export class MorningCoffeeComponent implements OnInit {
 switchNewsFormat:boolean = false;
newsSwap() {
this.switchNewsFormat = !this.switchNewsFormat;
}
quotes:any;
dogs:any;
  constructor(private quoteService:InsperationalQuoteService, private dogService:RandomDogService) { }

  pullQuotes(){
    this.quoteService.getQuote()
    .subscribe(response => {
      this.quotes = response;
    });
  }
  pullDog(){
    this.dogService.getQuote()
    .subscribe((response: any) => {
      this.dogs = response;
    });
  }
  ngOnInit(): void {

    this.pullDog()
    console.log(this.quotes.data.quoteText)
  }

}
