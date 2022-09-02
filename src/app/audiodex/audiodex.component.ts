import { Component, OnInit } from '@angular/core';
import { AudiodexSpreakerAPIService } from '../services/audiodex/audiodex-spreaker-api.service';
import { PokeapiService } from '../services/audiodex/pokeapi.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-audiodex',
  templateUrl: './audiodex.component.html',
  styleUrls: ['./audiodex.component.css']
})
export class AudiodexComponent implements OnInit {  
  pokedexLength: any = 6;
  _pokedexLength:number = 6;

  // updatePokedexLength(){
  //   if(this.pokedexLength == NaN 
  //     || this.pokedexLength <= 0 
  //     || this.pokedexLength >= 906){
  //     this.pokedexLength = "Invalid Input Exception: Looking For Number Between 1-905";
  //     console.log("Invalid Input Exception: Looking For Number Between 1-905- Input Returned: " + this.pokedexLength);
  //   }else{
  //     this._pokedexLength = this.pokedexLength;
  //     console.log("updatePokedexLength() fired- Output:" + this._pokedexLength);
  //     this.getPokemonData();
  //   }
  // }
  

  constructor(private testService : TestService,private pokeAPI : PokeapiService,private podcast:AudiodexSpreakerAPIService) { }

  //get data of pokemon from this appended link https://pokeapi.co/api/v2/pokemon/pokedexLength
  pokemonDataArray: any[] = Array.apply(null, Array(this._pokedexLength)).map(function (x, i) { return i; });
  pokemonEndpoint:string = '';
  getPokemonData(){
    this.pokemonDataArray = Array.apply(null, Array(this._pokedexLength)).map(function (x, i) { return i; });
    for(let i = 0; i < this.pokemonDataArray.length; i++){
      this.pokemonEndpoint = this.pokeAPI.getPokemonFromPokeAPIURL + (i+1);
      console.log(this.pokemonEndpoint);
      this.pokeAPI.getData(this.pokemonEndpoint).subscribe(data=>this.pokemonDataArray[i]=data);
      console.log('this.getData fired');
      console.log(this.pokemonDataArray[i]);
      
    }
    console.log(this.pokemonDataArray);
  }

  ngOnInit(): void {
    this.getPokemonData();
  }
  
  ngOnChange(): void {
    this.getPokemonData();
  }
}
