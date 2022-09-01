import { Component, OnInit } from '@angular/core';
import { ITestInterface } from '../interfaces/test-interface';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-audiodex',
  templateUrl: './audiodex.component.html',
  styleUrls: ['./audiodex.component.css']
})
export class AudiodexComponent implements OnInit {
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
