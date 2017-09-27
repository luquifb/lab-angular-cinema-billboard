import { Component, OnInit } from '@angular/core';
import { Cinema } from '../services/cinema.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [Cinema]
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Object>;

  constructor(public service: Cinema) { }

  ngOnInit() {
    this.movies = this.service.getMovies();
  }

}
