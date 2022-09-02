import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/audiodex/pokeapi.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-audiodex',
  templateUrl: './audiodex.component.html',
  styleUrls: ['./audiodex.component.css']
})
export class AudiodexComponent implements OnInit {  

  //ik this is not the best way to do this, but i want it to work ill refine later
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
