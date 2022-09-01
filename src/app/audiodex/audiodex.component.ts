import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/audiodex/pokeapi.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-audiodex',
  templateUrl: './audiodex.component.html',
  styleUrls: ['./audiodex.component.css']
})
export class AudiodexComponent implements OnInit {  
  private _infoSearchBar = '1';
  pokemonData: any ={} as any;
  pokemonEndpoint = this.pokeAPI.getPokemonFromPokeAPIURL + this._infoSearchBar;
  get infoSearchBar(): string {
    return this._infoSearchBar;
  }
  set infoSearchBar(infoSearchBar : string) {
    this._infoSearchBar = infoSearchBar;
    console.log('_infoSearchBar saved as infosearchbar')
  }
  onClick(): void {
    this.pokemonEndpoint = this.pokeAPI.getPokemonFromPokeAPIURL + this._infoSearchBar;
    this.getData();
    console.log('this.onClick fired');
  }
  

  constructor(private testService : TestService,private pokeAPI : PokeapiService) { }


  getData(){
    this.pokeAPI.getData(this.pokemonEndpoint).subscribe(data=>this.pokemonData=data);
    console.log('this.getData fired');
    console.log(this.pokemonData);
    console.log(this.pokemonEndpoint);
  }

  ngOnInit(): void {
    this.getData();
  }
 
 ngOnChange(): void {
  this.getData();
 }
  
}
