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
  pokedexLength = 5;
  pokemonDataArray: any[] = Array.apply(null, Array(this.pokedexLength)).map(function (x, i) { return i; })
  pokemonEndpoint:string = '';
  

  constructor(private testService : TestService,private pokeAPI : PokeapiService,private podcast:AudiodexSpreakerAPIService) { }


  getPokemonData(){
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
  
}
