import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list-component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component';
import { MovieDetailComponent } from './movies/movie-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { MovieService } from './movies/movie.service';
import { MovieDetailGuard } from './movies/movie-detail.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    MovieDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieListComponent },
      { path: 'movies/:id', canActivate: [MovieDetailGuard],
        component: MovieDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
