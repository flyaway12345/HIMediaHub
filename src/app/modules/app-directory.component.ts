import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-directory', 
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule 
  ],
  templateUrl: './app-directory.component.html',
  styleUrls: ['./app-directory.component.css']
})
export class AppDirectoryComponent implements OnInit {
  textSearch: any;
  constructor() { }

  ngOnInit(): void {
  }

}
