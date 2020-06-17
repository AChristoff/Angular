import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Movie from '../models/Movie';
import {map} from 'rxjs/operators';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import MovieDetails from '../models/Movie-Details';
import {query} from '@angular/animations';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=2e3c24fc938f2e5361bd46f6197c37d6';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + '/movie/popular' + API_KEY + '&language=en-US&page=1')
      .pipe(
        map((data) => data['results'].slice(1, 5))
      );
  }

  getInTheaterMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + '/movie/now_playing' + API_KEY + '&language=en-US&page=1')
      .pipe(
        map((data) => data['results'].slice(0, 4))
      );
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + '/movie/upcoming' + API_KEY + '&language=en-US&page=1')
      .pipe(
        map((data) => data['results'].slice(1, 5))
      );
  }

  getMovieById(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(BASE_URL + `/movie/${id}` + API_KEY);
  }

  searchMovie(query: string) {
    return this.http.get<Movie[]>(BASE_URL + '/search/movie' + API_KEY + `&query=${query}`);
  }
}
