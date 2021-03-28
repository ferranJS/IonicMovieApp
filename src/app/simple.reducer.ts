import { Movie } from "./models/movie.model";
import * as SimpleActions from './simple.actions'

import { HttpHeaders } from '@angular/common/http';

export type Action = SimpleActions.GetMovieList;

const defaultState: Movie[] = [];

const apiKey: string = "6e9e2f3ab49e2b1cdf0d0850f03e048f"
const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export function getMovieById(state: Movie[] = defaultState, action: Action) {

    switch(action.type) {
        case SimpleActions.GET_MOVIE_LIST:
            let query = action.query.query;
            let lang = action.query.lang
            let page = action.query.page
            let year = action.query.year
            var apiUrl: string = "https://api.themoviedb.org/3/search/movie?api_key="+apiKey;

            this.apiUrl += "&query="+ query +"&language="+ lang +"&page="+ page +"&year="+ year +"&include_adult=true";
            //let res: Object;
            async var newList = this.httpClient.get(this.apiUrl, httpOptions).subscribe(
                data => {
                    console.log(data);
                   },
                   err => {
                     console.log(err);
                   }
            );
    }
   

    //return Object.assign({}, state, {newList})

    return state = newList;

}
