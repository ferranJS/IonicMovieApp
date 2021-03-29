import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

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

  getData(query:string, lang:string, page:number, year:number) {
    this.apiUrl += "&query="+ query +"&language="+ lang +"&page="+ page +"&year="+ year +"&include_adult=true";
    return this.httpClient.get(this.apiUrl, httpOptions);
  }

  serchById(id:string, lang:string) {
    let apiUrl = "https://api.themoviedb.org/3/movie/"+ id +"?api_key="+ apiKey +"&language="+ lang
    return this.httpClient.get(apiUrl, httpOptions);
  }
}
