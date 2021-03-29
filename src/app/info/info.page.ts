import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private route: ActivatedRoute, public apiService: ApiService) { }

  id:string;
  movie;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.getMovie();
  }

  getMovie() {
    this.apiService.serchById(this.id, "es-ES")
    .subscribe(
      data => {
        this.movie = data;
      }, 
      err => console.log(err)
    );
  }
}
