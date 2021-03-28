import { Component } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any;
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    var data = this.apiService.getData("avengers", "es-ES", 1, 2019).subscribe(
      data => {
       console.log(data);
      },
      err => {
        console.log(err);
      }
    );
    console.log(data);
  }

}
