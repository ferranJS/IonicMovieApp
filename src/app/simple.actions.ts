import {Action} from '@ngrx/store';

export const GET_MOVIE_LIST = '[Get] Movie List'

interface Query {query:string, lang:string, page:number, year:number}

export class GetMovieList implements Action {
    readonly type = GET_MOVIE_LIST;

    constructor(public query: Query) {}
}

export type All  = GetMovieList;