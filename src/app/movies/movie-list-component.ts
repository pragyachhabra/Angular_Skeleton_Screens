import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { trigger } from '@angular/animations';
import { fadeIn } from '../animation/fadeIn';
import {  Subject } from 'rxjs';

@Component({
  selector: 'pm-movies',
  templateUrl: './movie-list-component.html',
  styleUrls: ['./movie-list-component.css'],
  providers: [MovieService],
  animations : [
    trigger('fadeIn', fadeIn())
  ]
  // styleUrls: ['./app.component.css']
})
export class MovieListComponent  implements OnInit {
  Pagetitle = ' Movie List';
  // imageWidth: number=300;
  // imageMargin: number = 5;
  showImage: boolean = false;
  errorMessage: any;
  dataLoaded = false;

  onRatingClicked(message: string): void {
    this.Pagetitle = 'Movie List: ' + message;
  }

  _listFilter:string;
    get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredmovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }
  filteredmovies:IMovie[];
  movies:IMovie[]=[];


 constructor(private movieService: MovieService){


 }
  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.MovieTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


toggleImage(): void{
  this.showImage = !this.showImage;
}

ngOnInit(): void {
  this.movieService.getMovies().subscribe({

    next: movies => {
      this.movies = movies;
      this.filteredmovies = this.movies;
      // this.dataLoaded = true;
      setTimeout(() => {
    this.dataLoaded = true;   }, 3000)
    },


    error: err => this.errorMessage = err
  });




}






}
