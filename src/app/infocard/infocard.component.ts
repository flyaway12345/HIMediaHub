import { Component, OnInit } from '@angular/core';
import { ITestInterface } from '../interfaces/test-interface';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {
  test : ITestInterface[] = [];
  
  constructor(private testService : TestService) { }

  cardTitle : string = ''

//testing interpolation

  ngOnInit(): void {
    this.cardTitle = 'Change This Cards Text'
    this.test = this.testService.sayTest();
  }

  onTitleUpdate(message:string): void{
    this.cardTitle = message;
  }
}
