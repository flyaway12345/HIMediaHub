import { Injectable } from '@angular/core';
import { ITestInterface } from '../interfaces/test-interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  sayTest(): ITestInterface[] {
    return [
      {"sayTest": "Test1"},
      {"sayTest": "Test2"},
      {"sayTest": "Test3"},
      {"sayTest": "Test4"},
      {"sayTest": "Test5"},
      {"sayTest": "Test6"},
      {"sayTest": "Test7"},
      {"sayTest": "Test8"},
      {"sayTest": "Test9"},
    ];
  }

}
