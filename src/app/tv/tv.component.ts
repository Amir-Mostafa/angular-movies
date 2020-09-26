import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TVComponent implements OnInit {

  tv:object[];
  prefix:string="https://image.tmdb.org/t/p/w500/";
  constructor(_tv:MoviesService) { 
    _tv.getTV().subscribe((data)=>{
      this.tv=data.results;
      console.log(this.tv);
    });
  }

  ngOnInit(): void {
  }

}
