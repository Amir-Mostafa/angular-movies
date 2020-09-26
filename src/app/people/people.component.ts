import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people:object[];
  prefix:string="https://image.tmdb.org/t/p/w500/";
  constructor(_people:MoviesService) { 
    _people.getPeople().subscribe((data)=>{
      this.people=data.results;
      console.log(this.people);
    });
  }

  ngOnInit(): void {
  }

}
