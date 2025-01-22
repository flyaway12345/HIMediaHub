import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-recipes',
  standalone: true,
  imports:[
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css']
})
export class RecipesComponent implements OnInit{

  recipeData: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/HIMediaHub/json/recipes.json';
  public constructor(private http: HttpClient) {}



  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.recipeData = res;
  });

}

}
