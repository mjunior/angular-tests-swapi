import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeoplesListService {

  constructor(private http: HttpClient) { }


  getPeoples(): Observable<any> {
    return this.http.get<any>('https://swapi.co/api/people');
  }
}
