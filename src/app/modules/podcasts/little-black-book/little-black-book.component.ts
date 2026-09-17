import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-little-black-book',
    imports: [CommonModule],
    templateUrl: './little-black-book.component.html',
    styleUrl: './little-black-book.component.css'
})
export class LittleBlackBookComponent {

  constructor() { }

  ngOnInit(): void {
  }
  formatSwitch:boolean = false;
  formatSwitchMethod(){
    this.formatSwitch = !this.formatSwitch;
  }
}
