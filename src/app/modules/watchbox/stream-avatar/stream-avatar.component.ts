import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stream-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stream-avatar.component.html',
  styleUrl: './stream-avatar.component.css'
})
export class StreamAvatarComponent {
  isTwitch:boolean = true;
  isYoutube:boolean = false;
  isTrovo:boolean = false;

  playerSwitchTwitch() {
    this.isTwitch = true;
    this.isYoutube =false;
    this.isTrovo =false;
  }
  playerSwitchYoutube() {
    this.isTwitch = false;
    this.isYoutube =true;
    this.isTrovo =false;
  }
  playerSwitchTrovo() {
    this.isTwitch = false;
    this.isYoutube =false;
    this.isTrovo =true;
  }
  ngOnInit(): void {

  }
}
