import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResultsService {
 

  constructor(
    private http: HttpClient,
  ) { }

  getResults(location: string): Observable<any> {

    const url = '/api/yelp/' + location + '/403';
    return this.http.get<any>(url);
  }

}
