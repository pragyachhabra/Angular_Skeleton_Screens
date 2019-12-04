import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IMovie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  [x: string]: any;
  private MovieUrl ='api/movies/movies.json'
  constructor(private http: HttpClient){}
  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.MovieUrl) .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getMovie(id: number): Observable<IMovie | undefined> {
    return this.getMovies()
.pipe(
        map((movies: IMovie[]) => movies.find(m => m.MovieId === id))
      );

  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // repodata = [
  //   {title : 'Get the best out of bootstrap 4', description: 'i dunno this is demo bro', imageUrl : '/assets/img/1.jpg'},
  //   {title : 'Love is free shipping away', description: 'learn all you need in this', imageUrl : '/assets/img/4.jpg'},
  //   {title : 'Exploring the grass lands of Africa', description: 'the grass the green', imageUrl : '/assets/img/6.jpg'},
  //   {title : 'Roman PSD stuffs and more', description: 'learn all you need in this', imageUrl : '/assets/img/7.jpg'}
  // ]
  // userdata = { name: "Abbas Ogaji", email: "abbasogaji@example.com"}

}
