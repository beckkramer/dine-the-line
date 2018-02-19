import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Station } from '../station';
import { StationService } from './station.service';

describe('StationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        StationService,
      ]
    });
  });

  it('should be created', inject([StationService], (service: StationService) => {
    expect(service).toBeTruthy();
  }));
});
