import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})

export class AllComponent implements OnInit {

  all:object[];
  prefix:string="https://image.tmdb.org/t/p/w500/";
  constructor(_movies:MoviesService) 
  {
    
    _movies.getAll().subscribe((data)=>{
      this.all=data.results;
    });
  }

  ngOnInit(): void {
  }

}
