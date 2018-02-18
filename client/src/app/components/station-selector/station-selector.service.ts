import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Station } from '../../station';

@Injectable()
export class StationSelectorService {

  private stationUrl = '/api/stations';

  constructor(
    private http: HttpClient,
  ) { }

  getAllStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.stationUrl);
  }

  filterStations(currentStations: Station[]) {
    let filteredStations = currentStations;
    
    console.log(filteredStations);
    return filteredStations;
  }

}
