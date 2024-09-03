import { Component, inject, OnInit, Signal } from '@angular/core';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {Movie} from './model/movie.model';
import { MoviesService } from './services/movies.service';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [MoviesService],
  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent
  ],
})
export class AppComponent implements OnInit  {

  private moviesService = inject(MoviesService)

  public movies: Signal<Movie[]>;

  movie: Movie =  {
    "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
    "title": "Harry Potter and the Philosopher's Stone",
    "duration": 152,
    "budget": 125,
    "release_date": "2001-11-04"
  };

  ngOnInit(): void {
      this.movies = this.moviesService.getMovies();
  }
}
