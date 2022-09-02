import { Component, OnInit } from '@angular/core';
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
 
  
}
