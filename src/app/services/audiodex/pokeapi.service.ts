import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private getAllPokemonFromPokeAPIURL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  getPokemonFromPokeAPIURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  getPokemonSpeciesDataViaPokeAPIURL:string = 'https://pokeapi.co/api/v2/pokemon-species/';
  constructor(private http: HttpClient) { 

  }

  getData(url:string){
    return this.http.get(url);
  }


}
