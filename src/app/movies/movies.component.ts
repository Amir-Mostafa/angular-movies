import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:object[];
  prefix:string="https://image.tmdb.org/t/p/w500/";
  constructor(_movies:MoviesService) {
    _movies.getMovies().subscribe((data)=>{
      this.movies=data.results;
      console.log(this.movies);
    });
   }

  ngOnInit(): void {
  }

}
