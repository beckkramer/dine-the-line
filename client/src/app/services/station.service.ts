import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/of';

import { Station } from '../station';

@Injectable()
export class StationService {

  private stationUrl = '/api/stations';

  constructor(
    private http: HttpClient,
  ) { }

  getAllStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.stationUrl);
  }

  public getFilteredStations(filters: any = [], allStations: Station[]) {
    
    let currentStations: Station[] = allStations;
    let filteredStations: Station[];

    if (filters.showA11y) {
      currentStations = currentStations.filter(station => station.accessible === true);
    }

    //currentStations = currentStations.filter(station => this.a11yToggle ? station.accessible === true : 'all');

    if (filters.lines.length) {
      filteredStations = currentStations.filter(station => station.lines.active.some(line=> filters.lines.includes(line)));
    } else {
      filteredStations = allStations;
    }

    return Observable.of(filteredStations);
  }

}
