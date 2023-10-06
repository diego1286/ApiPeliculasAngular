import { Injectable } from '@angular/core';
import {HttpClient  , HttpHeaders, HttpParams} from'@angular/common/http';
import { Observable , map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovisServices {

 


private apiKey = '3abef4e19da12b73b1d14cbe492109c2'; 
private apiUrl = 'https://api.themoviedb.org/3';


  constructor( private  http: HttpClient) { }

  
  buscarPelis(titulo:string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', titulo); 
  
    return this.http.get(`${this.apiUrl}/movie/popular`, { params });
  }

  
  getMovieById(movieId: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey);
    return this.http.get(`${this.apiUrl}/movie/${movieId}`, { params });
  }

}
