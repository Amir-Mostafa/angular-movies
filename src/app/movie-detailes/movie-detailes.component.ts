import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.scss']
})
export class MovieDetailesComponent implements OnInit {

  constructor() {
    var q =new URLSearchParams(window.location.search);
    var currentId=q.get("id"); 
    alert(currentId);
   }

  ngOnInit(): void {
  }
   
}

