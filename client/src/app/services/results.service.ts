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

  getResults(location: string, filters: any = []): Observable<any> {
    const urlRoot = `/api/yelp/${location}`;
    let filterParams = '/filters?';

    Object.keys(filters).forEach((filter, index) => {

      // Only add params if they are set to true or a string value
      if (filters[filter]) {

        if (index > 0) {
          filterParams += '&';
        }

        filterParams += `${filter}=${filters[filter].replace(' ', '_')}`;
      }
    });

    return this.http.get<any>(urlRoot + filterParams);
  }
}