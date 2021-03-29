import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movies: any;
  constructor(public apiService: ApiService, private router: Router) {}

  ngOnInit() {}

  sendQuery(input: string) {
    this.apiService.getData(input, "es-ES", 1, 0)
    .subscribe(
      data => {
        this.movies = data;
      }, 
      err => console.log(err)
    );
  }

  openInfo(id) {
    this.router.navigate(['tabs/tab1/'+id]);
  }
}
