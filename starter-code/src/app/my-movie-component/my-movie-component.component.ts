import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cinema, Movie } from '../services/cinema.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
})

export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  movie: Movie;

  constructor(private route: ActivatedRoute, public service: Cinema) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.movieId = Number(params['id'])
        this.movie = this.service.getMovie(this.movieId);
      });
  }

}
