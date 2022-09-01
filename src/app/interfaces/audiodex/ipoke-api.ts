import { IpokeApiResults } from "./ipoke-api-results";

export interface IPokeAPI {
    count: number;
    next: null;
    previous: null;
    results: IpokeApiResults;
}
