import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: Movie;
  imagePath: string;

  @Output()
  clickBtnEmitter: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }

  onBtnCLick() {
    this.clickBtnEmitter.emit(this.movie.id.toString());
  }

}
