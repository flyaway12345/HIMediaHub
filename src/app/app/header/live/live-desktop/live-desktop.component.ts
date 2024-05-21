import { Component } from '@angular/core';
import { TwitchComponent } from './twitch/twitch.component';

@Component({
  selector: 'app-live-desktop',
  standalone: true,
  imports: [TwitchComponent],
  templateUrl: './live-desktop.component.html',
  styleUrl: './live-desktop.component.css'
})
export class LiveDesktopComponent {

}
