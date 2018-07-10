import { Injectable } from '@angular/core';
import { Business } from '../business';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ResultsService {

  constructor(
    private http: HttpClient,
  ) { }

  getResults(location: string): Observable<any> {
    const url = `/api/yelp/${location}`;
    return this.http.get<any>(url);
  }
}