import { Component, OnInit } from '@angular/core';
import { ITestInterface } from '../interfaces/test-interface';
import { PokeapiService } from '../services/audiodex/pokeapi.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-audiodex',
  templateUrl: './audiodex.component.html',
  styleUrls: ['./audiodex.component.css']
})
export class AudiodexComponent implements OnInit {  
  constructor(private testService : TestService,private pokeAPI : PokeapiService) { }
  cardSearch : string = '1';
  
  pokemonEndpoint = this.pokeAPI.getPokemonFromPokeAPIURL + this.cardSearch;
  pokemonData: any;

  pokemonSpeciesEndpoint = this.pokeAPI.getPokemonSpeciesDataViaPokeAPIURL + this.cardSearch;
  pokemonSpeciesData: any;

//testing interpolation

  ngOnInit(): void {
    this.pokeAPI.getData(this.pokemonEndpoint).subscribe(data=>this.pokemonData=data);
    this.pokeAPI.getData(this.pokemonSpeciesEndpoint).subscribe(data=>this.pokemonSpeciesData=data);
  }
  ngOnChange():void {
    this.pokeAPI.getData(this.pokemonEndpoint).subscribe(data=>this.pokemonData=data);
    this.pokeAPI.getData(this.pokemonSpeciesEndpoint).subscribe(data=>this.pokemonSpeciesData=data);

  }
  onSearchUpdate(message:string): void{
    this.cardSearch = message;
  }
 
  
}
