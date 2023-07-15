import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  getPokemonFromPokeAPIURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  getPokemonSpeciesDataViaPokeAPIURL: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  constructor(private http: HttpClient) { 

  }
  
  getData(url:string){
    return this.http.get(url);
  }
  // pokedexLength: number = 1;
  // pokemonDataArray: any[] = Array.apply(null, Array(this.pokedexLength)).map(function (x, i) { return i; });
  // pokemonEndpoint:string = '';
  
}
 