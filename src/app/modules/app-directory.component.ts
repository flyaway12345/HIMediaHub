import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-directory', 
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app-directory.component.html',
  styleUrls: ['./app-directory.component.css']
})
export class AppDirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
