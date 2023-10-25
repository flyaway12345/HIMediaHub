import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css']
})
export class RecipesComponent implements OnInit{

  recipeData: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/CookingByApproximation/main/src/assets/recipes.json';
  public constructor(private http: HttpClient) {}



  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.recipeData = res;
  });
  
}
 
}