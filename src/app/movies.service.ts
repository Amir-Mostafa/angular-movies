import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(public _HttpClient:HttpClient) {

   }

   getAll():Observable<any>
   {
     
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=24ce31110d03d653564b16e4458f2289");
   }

   getMovies():Observable<any>
   {
     
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=24ce31110d03d653564b16e4458f2289");
   }

   getPeople():Observable<any>
   {
     
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/people/day?api_key=24ce31110d03d653564b16e4458f2289");
   }

   getTV():Observable<any>
   {
     
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=24ce31110d03d653564b16e4458f2289");
   }
}
