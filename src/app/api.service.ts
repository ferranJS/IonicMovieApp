import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { catchError, tap, map } from "rxjs/operators";

const apiKey: string = "6e9e2f3ab49e2b1cdf0d0850f03e048f"
const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  apiUrl: string = "https://api.themoviedb.org/3/search/movie?api_key="+apiKey;

  constructor(private httpClient: HttpClient) { }

  res: Object;
  getData(query:string, lang:string, page:Number, year:Number) {
    this.apiUrl += "&query="+ query +"&language="+ lang +"&page="+ page +"&year="+ year +"&include_adult=true";
    //let res: Object;
    return this.httpClient.get(this.apiUrl, httpOptions);
  }
}
