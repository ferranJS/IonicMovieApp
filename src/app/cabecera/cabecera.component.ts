import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';

interface AppState {
  movie: Movie;
}

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  search() {
    this.store.dispatch({type: "ad"})
  }

}
