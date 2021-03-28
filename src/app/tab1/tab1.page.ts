import { Component, ViewChild } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movies: any;
  constructor(public apiService: ApiService) {}

  ngOnInit() {}

  sendQuery(input: string) {
    this.apiService.getData(input, "es-ES", 1, 0)
    .subscribe(
      data => {
        this.movies = data;
		    console.log(this.movies);
      }, 
      err => console.log(err)
    );
  }
}
