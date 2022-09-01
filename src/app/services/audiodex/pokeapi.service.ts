import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IPokeAPI } from 'src/app/interfaces/audiodex/ipoke-api';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private getAllPokemonFromPokeAPIURL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

  constructor(private http: HttpClient) { 

  }

  getAllPokemonFromPokeAPI(): Observable<IPokeAPI[]>{
    return this.http.get<IPokeAPI[]>(this.getAllPokemonFromPokeAPIURL).pipe(
      tap(data => console.log('ALL: ', JSON.stringify(data))),
      catchError(this.pokeAPIHTTPError)
    );
  }

  private pokeAPIHTTPError(err: HttpErrorResponse){
    return throwError(()=>err.error.message);
  }
}
