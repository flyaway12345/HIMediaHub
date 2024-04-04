import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-soundboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './soundboard.component.html',
  styleUrl: './soundboard.component.css'
})
export class SoundboardComponent {
playsound() {
 let audio = new Audio();
 audio.src = "src/app/modules/soundboard/assets/Fedyourmom.mp3"
 audio.load();
 audio.play();
}

}
